// object destructuring 
const band = {
    bandName:"moosewala records",
    famousSong:"295",
};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, "& song is", famousSong);

//shorthand for above is
const { bandName, famousSong } = band;
console.log(bandName);
console.log(famousSong);

const { bandName: var1, famousSong: var2 } = band;
console.log(var1);// if you find this as bandName so you can't find this becuase bandName is now var1
console.log(var2);

