'use strict';
/**
 * Generating KYC_Details Asset and corresponding assets for verification 
 * @param {org.acme.kyc.Send_for_KYC_approval} send_for_KYC_approval
 * @transaction
 */
function send_for_KYC_approval(kyc) {
    var factory = getFactory();
    var user = getCurrentParticipant();
    if(user.kyc_id){
        throw new Error("user already have KYC_details in the network cannot request again");
    }
    var id = user.id;

    // Generating KC_Details Asset
    var aadharNumber = kyc.Documents.aadhar_documents.documents_submitted.number;
    var passportNumber = kyc.Documents.passport_documents.documents_submitted.number;
    var assetID = id+"_"+aadharNumber.substr(aadharNumber.length - 2)+"_"+passportNumber.substr(passportNumber.length - 2);
    var KYCasset = factory.newResource('org.acme.kyc','KYC_Details',assetID);
    KYCasset.kyc_of_userid = user;
    KYCasset.KYC_Information = kyc.KYC_Information;
    KYCasset.KYC_status = "REQUESTED";
    KYCasset.applied_documents_status = [];
    var docs = []
    /*var docs_a = factory.newConcept('org.acme.kyc','Documents_status');
    docs_a.document_type = "AADHAR";
    docs_a.status = "REQUESTED";
    var docs_p = factory.newConcept('org.acme.kyc','Documents_status');
    docs_p.document_type = "PASSPORT";
    docs_p.status = "REQUESTED";
    KYCasset.applied_documents_status.push(docs_a);
    KYCasset.applied_documents_status.push(docs_p);*/
   
    /*
     * Genrating Aadhar_Verifications Assset  and Passport_Verifications Asset for verification of details
     */
    var aa_id = id+"_"+aadharNumber.substr(aadharNumber.length - 2)+'REQUESTED'
    var aadhar_asset = factory.newResource('org.acme.kyc','Aadhar_verifications',aa_id);
    //aadhar_asset.aadhar_number = aadharNumber;
    /*var submitted_aadhar_Documents = factory.newConcept('org.acme.kyc','Documents_checklist');
    submitted_aadhar_Documents.number = req*/
    aadhar_asset.documents_submitted = kyc.Documents.aadhar_documents.documents_submitted;
    aadhar_asset.userId = user;
    aadhar_asset.status = "REQUESTED";

    var p_id = id+"_"+passportNumber.substr(passportNumber.length - 2)+'REQUESTED'
    var passport_asset = factory.newResource('org.acme.kyc','Passport_verifications',p_id);
    //passport_asset.passport_number =  passportNumber;
    passport_asset.documents_submitted = kyc.Documents.passport_documents.documents_submitted;
    passport_asset.userId = user;
    passport_asset.status = "REQUESTED";


    var Aadhar_Documents = factory.newConcept('org.acme.kyc','Aadhar_Documents');
    Aadhar_Documents.document_name = "AADHAR";
    Aadhar_Documents.documents_submitted = kyc.Documents.aadhar_documents.documents_submitted;
    Aadhar_Documents.status = "REQUESTED";
    Aadhar_Documents.approvedByAadharAdminId = "NOT ASSIGNED YET";
    Aadhar_Documents.approvedInAadharRequest = aadhar_asset;
    var Passport_Documents = factory.newConcept('org.acme.kyc','Passport_Documents');
    Passport_Documents.document_name = "PASSPORT";
    Passport_Documents.documents_submitted = kyc.Documents.passport_documents.documents_submitted;    
    Passport_Documents.status = "REQUESTED";
    Passport_Documents.approvedByPassportAdminId = "NOT ASSIGNED YET"
    Passport_Documents.ApprovedInPassportRequest = passport_asset;
    var docs_a = factory.newConcept('org.acme.kyc','Documents_status');
    docs_a.aadhar_documents = Aadhar_Documents;
    docs_a.passport_documents = Passport_Documents;
    KYCasset.applied_documents_status = docs_a;
    // Publishing Events 

    var kyc_requested = factory.newEvent('org.acme.kyc','Added_KYC');
    kyc_requested.kyc_id = assetID;
    kyc_requested.userId = user;

    var aadhar_VR = factory.newEvent('org.acme.kyc','Requesting_Aadhar_verification');
    aadhar_VR.aadhar_number = kyc.Documents.aadhar_documents.documents_submitted.number;
    aadhar_VR.userId = user;

    var passport_VR = factory.newEvent('org.acme.kyc','Requesting_passport_verification');
    passport_VR.passport_number = kyc.Documents.passport_documents.documents_submitted.number;    
    passport_VR.userId = user;

    user.kyc_id = KYCasset; // Appending the generated Asset to User details
    var SharingAssetid = user.getIdentifier()+"_SharingAsset";
    var SharingAsset = factory.newResource('org.acme.kyc','SharingAsset',SharingAssetid);
    SharingAsset.userId = user;
    SharingAsset.kycId = user.kyc_id;
    SharingAsset.sharingWithIDs = [];
    user.sharingAssetId = SharingAsset;
    return getAssetRegistry('org.acme.kyc.KYC_Details')
    .then(function (assetRegistry) {
        return assetRegistry.add(KYCasset);
    })
    .then(function(){
        return getAssetRegistry('org.acme.kyc.SharingAsset')
    })
    .then(function(sr){
        return sr.add(SharingAsset);
    })
    .then(function(){
        return getParticipantRegistry('org.acme.kyc.User')
    })
    .then(function(userRegistry){
        emit(kyc_requested);
        emit(aadhar_VR);
        emit(passport_VR);
        return userRegistry.update(user);
    })
    .then(function(){
        return getAssetRegistry('org.acme.kyc.Aadhar_verifications')
    })
    .then(function(aar){
        return aar.add(aadhar_asset);
    })
    .then(function(){
        return getAssetRegistry('org.acme.kyc.Passport_verifications')
    })
    .then(function(pr){
        return pr.add(passport_asset);
    })
}

/**
 * Aadhar verifiaction  and updating the status 
 * @param {org.acme.kyc.Update_AadharStatus} update_AadharStatus
 * @transaction
 */
function update_AadharStatus(data){
    updateStatus(data.aadhar_verifications_ID,data.status,data.remarks,"AADHAR",'aadhar_Status_Update','org.acme.kyc.Aadhar_verifications')
}

// Function to verify if all documents are verified, to make the KYC Approved 

function is_KYC_verified(kyc_details){
    var count = 0;
    if(kyc_details.applied_documents_status.aadhar_documents.status == "APPROVED"){
        count++;
    }
    if(kyc_details.applied_documents_status.passport_documents.status == "APPROVED"){
        count++;
    }
    if(count == 2){
        return true;
    }else{
        return false;
    }
}

/**
 * Function to update the Status of Passport verification 
 * @param {org.acme.kyc.Update_PassportStatus} update_PassportStatus
 * @transaction
 */

function update_PassportStatus(data){
    updateStatus(data.passport_verifications_ID,data.status,data.remarks,"PASSPORT",'passport_Status_Update','org.acme.kyc.Passport_verifications')
}

/*
* Common function for update_AadharStatus and update_PassportStatus to update the kyc details.
*/
function updateStatus(id,dStatus,dRemarks,doc_type,eName,NS){
    var factory = getFactory();
    var verifier = getCurrentParticipant();
    if(dStatus == "REQUESTED"){
        throw new Error("Cannot change status to Requested")
    }
    var user = id.userId;
    var aa_asset = id;
    if(aa_asset.status == "APPROVED"){
        throw new Error("Already Approved , Cannot perform this operation");
    }
    aa_asset.status = dStatus;
    aa_asset.updatedBy = verifier;
    if(dRemarks){
        aa_asset.remarks = dRemarks;
    }
    var kyc_details = user.kyc_id;
    if(kyc_details.KYC_status == "APPROVED"){
        throw new Error("KYC has been Approved earlier , cannot perform this tx")
    }

    /*for (var i=0 ;i<kyc_details.applied_documents_status.length;i++){
        if(kyc_details.applied_documents_status[i].document_type == doc_type){
            kyc_details.applied_documents_status[i].status = dStatus;
            if(dRemarks){
                kyc_details.applied_documents_status[i].remarks = dRemarks;
            }
            if(doc_type == "AADHAR"){
                kyc_details.applied_documents_status[i].approvedByAadharAdminId = user;
                kyc_details.applied_documents_status[i].approvedInAadharRequest = aa_asset;
            } 
            else if(doc_type == "PASSPORT"){
                kyc_details.applied_documents_status[i].approvedByPassportAdminId = user;
                kyc_details.applied_documents_status[i].ApprovedInPassportRequest = aa_asset;
            }
        }
    }*/
    if(doc_type == "AADHAR"){
        kyc_details.applied_documents_status.aadhar_documents.status = dStatus;
        if(dRemarks){
            kyc_details.applied_documents_status.aadhar_documents.remarks = dRemarks;
        }
        kyc_details.applied_documents_status.aadhar_documents.approvedByAadharAdminId = verifier.getFullyQualifiedIdentifier();
        kyc_details.applied_documents_status.aadhar_documents.approvedInAadharRequest = aa_asset;
    }
    else if(doc_type == "PASSPORT"){
        kyc_details.applied_documents_status.passport_documents.status = dStatus;
        if(dRemarks){
            kyc_details.applied_documents_status.passport_documents.remarks = dRemarks;
        }
        kyc_details.applied_documents_status.passport_documents.approvedByPassportAdminId = verifier.getFullyQualifiedIdentifier();
        kyc_details.applied_documents_status.passport_documents.ApprovedInPassportRequest = aa_asset;
    }

    if(is_KYC_verified(kyc_details)){
        kyc_details.KYC_status = "APPROVED";
    }else{
        if(kyc_details.KYC_status != "REQUESTED"){
            kyc_details.KYC_status = "UNDER_REVIEW";
        }
    }
    var aa_event = factory.newEvent('org.acme.kyc',eName);
    aa_event.userID = user;
    return getAssetRegistry(NS)
    .then(function(asset){
       return asset.update(aa_asset);
    })
    .then(function(){
        return getAssetRegistry('org.acme.kyc.KYC_Details')
    })
    .then(function(kyc){
        emit(aa_event);
        return kyc.update(kyc_details)
    })
}
/**
 * kyc_seeker requesting the kyc details of a user 
 * @param {org.acme.kyc.AskForKycDetails} askForKycDetails
 * @transaction
 */

function askForKycDetails(request){
    var factory = getFactory();
    var user = getCurrentParticipant();
    //var userAddress = user.getFullyQualifiedIdentifier();
    var uid = request.userId.getIdentifier();
    var assetId = user.id+"_"+uid+"_REQ"
    var asset = factory.newResource('org.acme.kyc','Kyc_Seekers_Requests',assetId);
    asset.KYC_Seeker_ID = user;
    asset.userid = request.userId;
    asset.status="REQUESTED";
    if(!user.Requests_id){
        user.Requests_id = [];
    }
    user.Requests_id.push(asset);

    var requestEvent = factory.newEvent('org.acme.kyc','kyc_requested');
    requestEvent.Seeker_id = user;
    requestEvent.userId = request.userId;
    return getAssetRegistry('org.acme.kyc.Kyc_Seekers_Requests')
    .then(function(ar){
        return ar.add(asset);
    })
    .then(function(){
        return getParticipantRegistry('org.acme.kyc.KYC_Seeker')
    })
    .then(function(pr){
        emit(requestEvent)
        return pr.update(user)
    })
}

/**
 * Granting or denial of permission to their kyc
 * @param {org.acme.kyc.Permission_To_My_Kyc} permission_To_My_Kyc
 * @transaction
 */

 function permission_To_My_Kyc(req){
    // this function updates the Kyc_Seekers_Requests status and if Approved adds seeker id to User's SharingAsset 
    var factory = getFactory();
    var user = getCurrentParticipant();
    if(req.Kyc_Seekers_Requests_id.userid.getIdentifier() != user.getIdentifier()){
        throw new Error("Your KYC details are not APPROVED yet so cannot Perform this action")
    }
    // logic to check if seeker already exists go here
    var seeker_asset = req.Kyc_Seekers_Requests_id;
    seeker_asset.status = req.response;
    seeker_asset.kyc_id = user.kyc_id;
    if(req.response == "APPROVED"){
        var response = updateSharingAsset(req)
    }
    var statusChangedEvent = factory.newEvent('org.acme.kyc','kyc_requested_status_changed');
    statusChangedEvent.Kyc_Seekers_Requests_id = req.Kyc_Seekers_Requests_id;
    statusChangedEvent.status = req.response;
    return getAssetRegistry('org.acme.kyc.Kyc_Seekers_Requests')
    .then(function(kr){
        emit(statusChangedEvent)
        return kr.update(seeker_asset);
    })
 }

 function updateSharingAsset(req){
    var seeker = req.Kyc_Seekers_Requests_id.KYC_Seeker_ID.getFullyQualifiedIdentifier();
    var user = req.Kyc_Seekers_Requests_id.userid;
    var sharingAsset = user.sharingAssetId;
    sharingAsset.sharingWithIDs.push(seeker);
    return getAssetRegistry('org.acme.kyc.SharingAsset')
    .then(function(sa){
        return sa.update(sharingAsset);
    })
 }