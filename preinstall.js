const minNodeVersion = 16;
console.warn('\n============>Make sure you are on Node version 16');
var majorNodeVersion = process.versions.node.split('.')[0]
if(majorNodeVersion<minNodeVersion){
    console.error('\n============>Error: Your node version low please run : nvm use '+ minNodeVersion);
    console.log('\n\n');
    process.exit(1);   
} else {
    console.log('\n============>Your node version is good : node '+ minNodeVersion);
}
console.log('\n\n');
