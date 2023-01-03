const IDOFactory = artifacts.require("IDOFactory");
const TokenLockerFactory = artifacts.require("TokenLockerFactory");

module.exports = function (deployer) {
    deployer.then(async () => {
        let feeToken = "0xA113472D21c92A833414BC573b544c5858462CDA";
        await deployer.deploy(IDOFactory, feeToken, "100000", "0");
        await deployer.deploy(TokenLockerFactory);
    });
};