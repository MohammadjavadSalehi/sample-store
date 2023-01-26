const body = document.body;
let categories;
//getting data
const getBanner = async ()=>{
    const banner = await fetch("https://fakestoreapi.com/products?limit=3")
    let bannerPic = await banner.json();
    createBanner(bannerPic);
}
const getData = async () =>{
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    createCards(data);
};
const getCategory = async ()=>{
    const cat = await fetch("https://fakestoreapi.com/products/categories");
    categories = await cat.json();
    
}
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
const mainElements = () => {
    const main = document.createElement("main");

    const products = document.createElement("div");
    products.className = "products";

    main.append(products);
    body.querySelector("section").insertAdjacentElement("afterend",main);
};
const createCards = (data) =>{
    let cardsData = [...data];
    const navigation = document.querySelector("section");

    const categoryOption = document.createElement("option");
    categoryOption.innerText = "Select Category";
    categoryOption.setAttribute("selected", "selected");
    categoryOption.setAttribute("disabled","disabled");

    const select = document.createElement("select");
    select.className = "select-episode";
    let catdata = [...categories]
    console.log(catdata);
    catdata.forEach((e)=>{
        const option = document.createElement("option");
        option.className = "episode-option";
        option.innerText = e
        option.value = e.url;
        select.append(option);
    });
    select.prepend(categoryOption);
    navigation.append(select);

    select.addEventListener("change",()=>{
        if(select.value != categoryOption.value)
            window.open(select.value);
    });
    //cards
    cardsData.forEach((e)=>{
        const card = document.createElement("div");
        card.className = "card";
        card.classList.add("show")
        const picture = document.createElement("img");
        picture.src = e.image;
        picture.className = "card-img"
        picture.alt = e.description;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardInformation = document.createElement("div");
        cardInformation.className = "card-information";
        
        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = e.title;

        const seasonInfo = document.createElement("h6");
        seasonInfo.className = "card-infoSeason"
        seasonInfo.innerText = e.price

        const descriptionText = document.createElement("p");
        descriptionText.className = "description"
        descriptionText.innerHTML = e.description;
        descriptionText.innerHTML = descriptionText.innerHTML.substring(0,120)+"..."
        const cardButton = document.createElement("a");
        cardButton.classList = "card-button";
        cardButton.innerText = "Buy";
        cardButton.href = e.url;

        cardInformation.append(cardTitle);
        cardInformation.append(seasonInfo);
        cardBody.append(cardInformation);
        cardBody.append(descriptionText);
        cardBody.append(cardButton);
        card.append(picture);
        card.append(cardBody);
        body.querySelector(".products").append(card);
    });
};
const footerElements = () =>{
    const footer = document.createElement("footer");
    footer.className = "footer";
    body.querySelector("main").insertAdjacentElement("afterend",footer);

    const licenseText = document.createElement("p");
	licenseText.className = "tvmaze-api-license";

    const licenseLink = document.createElement("a");
    licenseLink.innerText = "This website created by Fake Store Api";
    licenseLink.href = "https://fakestoreapi.com/";
    licenseLink.target = "_blank";

    const designer = document.createElement("p");
    designer.className = "designer";
    designer.innerText = "Designed by Mohammad Javad Salehi"
    licenseText.append(licenseLink);
    footer.append(licenseText);
    footer.append(designer);
};
getBanner();
getCategory();
getData();
mainElements();
footerElements();
