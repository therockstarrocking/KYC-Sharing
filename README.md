# KYC-Sharing
KYC infomation sharing POC using Hyperledger-composer

## Running App

### Step 1 

***Building Composer network***

> NOTE: follow instructions on composer read the docs [here](https://hyperledger.github.io/composer/next/installing/installing-index)

* Install all the Pre-requisites from [here](https://hyperledger.github.io/composer/next/installing/installing-prereqs)
* Start the fabric-tools network as mentioned [here](https://hyperledger.github.io/composer/next/installing/development-tools)

### Starting up network 

* ` cd KYC-Sharing/kyc-dl `

#### Create an archive (.bna) file
    
* `composer archive create -t dir -n .`

#### Deploying the business network

1. To install the composer runtime, run the following command:
    * `composer runtime install --card PeerAdmin@hlfv1 --businessNetworkName kyc-dl`

2. To deploy the business network run the following command:
    * ` composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --archiveFile kyc-dl@0.0.1.bna --file networkadmin.card`

3. To import the network administrator identity as a usable business network card, run the following command:
    * `composer card import --file networkadmin.card`

4. To check that the business network has been deployed successfully, run the following command to ping the network:
     * `composer network ping --card admin@tutorial-network`

#### Generating a REST server

* Run the following Command to generate the REST Server

> For no authorizaton :

`composer-rest-server` 

1. Enter **admin@kyc-dl** as the card name

2. Select **never use namespaces** when asked whether to use namespaces in the generated API.

3. Select **No** when asked whether to secure the generated API.

4. Select **Yes** when asked whether to enable event publication.

5. Select **No** when asked whether to enable TLS security.

> For Github oauth :
>> NOTE: Make sure you setup Github oauth for this application
* Composer provider command :

    `COMPOSER_PROVIDERS='{"github":{"provider":"github","module":"passport-github","clientID":"569a16aaf6ebcd7","clientSecret":"006d7f96f05b2969ed897721fcbcb1820","authPath":"/auth/github","callbackURL":"/auth/github/callback","successRedirect":"/","failureRedirect":"/"}}'`

    Replace *clientID* and *clientSecret* with your credentials
* Run the below command to start the Rest server

`composer-rest-server -c admin@kyc-dl -n "never" -p 3000 -a true -m true`

* Go to [http://localhost:3000/auth/github/](http://localhost:3000/auth/github/)

#### To start the App 

` cd ../KYC-DL`

` npm install `

` ng serve ` 

* Go to [http://localhost:4200/](http://localhost:4200)
