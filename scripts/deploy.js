const fs = require('fs');

async function main(){

    const [deployer] = await ethers.getSigners();

    console.log(`Deploying contracts with deployer address ${deployer.address}`);

    const balance = await deployer.getBalance();
    console.log("Account Balance:",balance.toString())

    const Token = await ethers.getContractFactory('Token');
    const token = await Token.deploy();

    console.log(`Token Address::${token.address}`)

    const data = {
        address:token.address,
        abi:JSON.parse(token.interface.format('json'))
    }

    fs.writeFileSync('frontend/src/Token.json',JSON.stringify(data));

}

main()
    .then(() => process.exit(0))
    .catch(err => {
        console.error(err);
        process.exit(1);
    })