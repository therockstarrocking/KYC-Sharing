import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.acme.kyc{
   export abstract class Network_Users extends Participant {
      id: string;
      name: string;
   }
   export class Aadhar_Admin extends Network_Users {
      canSignTx: boolean;
   }
   export class Passport_Admin extends Network_Users {
      canSignTx: boolean;
   }
   export class KYC_Seeker extends Network_Users {
      organisation_Name: string;
      Requests_id: Kyc_Seekers_Requests[];
   }
   export enum Gender {
      MALE,
      FEMALE,
   }
   export enum Status {
      REQUESTED,
      APPROVED,
      DENIED,
      PENDING,
      UNDER_REVIEW,
      VERIFIED,
   }
   export enum Documents {
      AADHAR,
      PASSPORT,
   }
   export class User extends Network_Users {
      kyc_id: KYC_Details;
      sharingAssetId: SharingAsset;
   }
   export class KYC_Information {
      name: string;
      dob: string;
      gender: Gender;
      aadhar_number: string;
      passport_number: string;
   }
   export class Passport_Documents {
      document_type: Documents;
      status: Status;
      approvedByPassportAdminId: string;
      ApprovedInPassportRequest: Passport_verifications;
      remarks: string;
   }
   export class Aadhar_Documents {
      document_type: Documents;
      status: Status;
      approvedByAadharAdminId: string;
      approvedInAadharRequest: Aadhar_verifications;
      remarks: string;
   }
   export class Documents_status {
      aadhar_documents: Aadhar_Documents;
      passport_documents: Passport_Documents;
   }
   export class Added_KYC extends Event {
      kyc_id: string;
      userId: User;
   }
   export class Requesting_Aadhar_verification extends Event {
      aadhar_number: string;
      userId: User;
   }
   export class Requesting_passport_verification extends Event {
      passport_number: string;
      userId: User;
   }
   export class KYC_Details extends Asset {
      kyc_id: string;
      kyc_of_userid: User;
      KYC_Information: KYC_Information;
      applied_documents_status: Documents_status;
      KYC_status: Status;
   }
   export class SharingAsset extends Asset {
      id: string;
      userId: User;
      kycId: KYC_Details;
      sharingWithIDs: string[];
   }
   export class Kyc_Seekers_Requests extends Asset {
      id: string;
      KYC_Seeker_ID: KYC_Seeker;
      userid: User;
      kyc_id: KYC_Details;
      status: Status;
   }
   export abstract class From_Kyc extends Asset {
      id: string;
      userId: User;
      status: Status;
   }
   export class Aadhar_verifications extends From_Kyc {
      aadhar_number: string;
      updatedBy: Aadhar_Admin;
   }
   export class Passport_verifications extends From_Kyc {
      passport_number: string;
      updatedBy: Passport_Admin;
   }
   export class Send_for_KYC_approval extends Transaction {
      KYC_Information: KYC_Information;
   }
   export abstract class verification_of_documents extends Transaction {
      status: Status;
      remarks: string;
   }
   export class aadhar_Status_Update extends Event {
      userID: User;
   }
   export class passport_Status_Update extends Event {
      userID: User;
   }
   export class Update_AadharStatus extends verification_of_documents {
      aadhar_verifications_ID: Aadhar_verifications;
   }
   export class Update_PassportStatus extends verification_of_documents {
      passport_verifications_ID: Passport_verifications;
   }
   export class kyc_requested extends Event {
      Seeker_id: KYC_Seeker;
      userId: User;
   }
   export class AskForKycDetails extends Transaction {
      userId: User;
   }
   export class kyc_requested_status_changed extends Event {
      Kyc_Seekers_Requests_id: Kyc_Seekers_Requests;
      status: Status;
   }
   export class Permission_To_My_Kyc extends Transaction {
      Kyc_Seekers_Requests_id: Kyc_Seekers_Requests;
      response: Status;
   }
// }
