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
    const carouselItem1 = document.querySelector(".one")
    const carouselItem2 = document.querySelector(".two")
    const carouselItem3 = document.querySelector(".three")
    carouselItem1.style.backgroundImage = `url('${bannerData[0].image}')` 
    carouselItem2.style.backgroundImage = `url('${bannerData[1].image}')` 
    carouselItem3.style.backgroundImage = `url('${bannerData[2].image}')` 
    const carouselItem1Name = document.querySelector(".name1")
    const carouselItem2Name = document.querySelector(".name2")
    const carouselItem3Name = document.querySelector(".name3")
    carouselItem1Name.textContent = bannerData[0].title
    carouselItem2Name.textContent = bannerData[1].title
    carouselItem3Name.textContent = bannerData[2].title
};
getData();
