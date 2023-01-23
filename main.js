const body = document.body;
//getting data
const getData = async () =>{
    const banner = await fetch("https://fakestoreapi.com/products?limit=3")
    // const response = await fetch("https://fakestoreapi.com/products");
    let bannerPic = await banner.json();
    // let data = await response.json();
    createBanner(bannerPic);
    // createCards(data);
};
const createBanner = (bannerPic)=>{
    let bannerData = [...bannerPic];
    console.log(bannerData);
    console.log(bannerData[0].image);
    console.log(bannerData[1].image);
    console.log(bannerData[2].image);
    const carouselItem1 = document.querySelector(".one")
    const carouselItem2 = document.querySelector(".two")
    const carouselItem3 = document.querySelector(".three")
    carouselItem1.style.backgroundImage = `url('${bannerData[0].image}')` 
    carouselItem2.style.backgroundImage = `url('${bannerData[1].image}')` 
    carouselItem3.style.backgroundImage = `url('${bannerData[2].image}')` 
    console.log(`url('${bannerData[1].image}')`);
};
getData();
