
const lodeAllNews  = async() =>{
    const url ="https://openapi.programming-hero.com/api/news/categories"
   try{
    const res =await fetch (url)
    const data = await res.json()
    displayNews(data.data.news_category)
   }
   catch(error){
    console.log(error);
   }   
}


const displayNews = async (news)=>{
    const categoryContainer =document.getElementById('news-catagory-section');
    news.forEach(newsCategory => {
        const {category_name,category_id} = newsCategory;
        const createDiv =document.createElement('li');
        createDiv.classList.add("fw-bold");
        createDiv.innerHTML=`
        <a onclick="lodeAllNewsDitails(${category_id})">${category_name}</a>
        `;
        categoryContainer.appendChild(createDiv)
        
    });
}

const lodeAllNewsDitails = async(id) =>{

 const url =`https://openapi.programming-hero.com/api/news/category/0${id}`
   try{
    const res =await fetch (url)
    const data = await res.json()
    displayNewsOnCard(data.data)
   }
   catch(error){
    console.log(error);
   }  
}

const displayNewsOnCard = cards =>{
 
    const getCardSection = document.getElementById('news-card-section');
    getCardSection.textContent =""


            // found mazzeg
            const foundedMessege = document.getElementById('found-fild');
            foundedMessege.classList.remove('hidden')
  
      
           // founded-text
              const fountText = document.getElementById('founded-text')
             fountText.innerText = cards.length;

            //  spinner  

            const displaySpnner = document.getElementById('found-loder');
            displaySpnner.classList.remove('visually-hidden');

   
            const Piority = cards.sort((populer,lessPopuler)=>{
                if(populer.total_view < lessPopuler.total_view){
                    return 1;
                }
                else{
                    return -1;
                }
            })

      cards.forEach(card =>{
     
        const {image_url,thumbnail_url,title,details,author,total_view,} = card;
        const {name,published_date,img} =author;

        const creatCardDiv =document.createElement("div");

        const displaySpnner = document.getElementById('found-loder');
        displaySpnner.classList.add('visually-hidden');

        creatCardDiv.classList.add("col-lg-4",  "col-sm-6","mt-6")
        creatCardDiv.innerHTML =`
                   
        <div class="card" onclick="modal()">
        <img src="${image_url}" class="card-img-top w-100 img-fluid" alt="...">

        <div class="d-flex">
        <div class=" mx-lg-1 mx-md-0 mx-sm-0">
          <i class="fa-solid fa-eye "></i> 
        </div>
        <div class="text-muted">
        <p><span>${total_view ? total_view : "0"} M</span></p> 
        </div>
        <p style=" margin-left:160px;" class=" text-muted">${published_date ? published_date : "published date not found"}</p>
       </div>

        <div class="card-body m-0">
          <h4 class="card-title">${title > 8 ? title.slice(0,8) + "....." : title}</h4>
          <p>${details.length > 100 ? details.slice(0,100) + " ....." : details}</p>
        </div>

        <div class="mr-3 d-flex">
        <img class="w-25 ms-3 mb-2 rounded-circle" src="${img ? img : "img not found"}" alt="">
        <p class="mx-3 mt-4 text-muted">${name ? name : "name not found"}</p>
        </div>
         
     

       </div>              
        `;
        getCardSection.appendChild(creatCardDiv)
    })
}

// modeal js section 

const modelUrl = async() =>{
    const url = `https://openapi.programming-hero.com/api/news/id`;
    
   try{
    const res = await fetch (url)
    const data = await res.json()
     const read = displayModel(data.data);
     console.log(read)
      return read;
   }
   catch(error){
    console.log(error);
   }
}

const displayModel = async(Ditail)=>{
    
    const getModelById = document.getElementById('model-body');

     for( const ditsils in Ditail){
    
        const {category_name,category_id,img,title} = ditsils;
        const createDiv =document.createElement('div');
        createDiv.classList.add("fw-bold");
        createDiv.innerHTML=`
          <img src="${img}">
          <h3> ${category_name}</h3>
          <h5> ${title}</h5>
        `;
        getModelById.appendChild(createDiv)
     }
}


 
 lodeAllNewsDitails(01)
 lodeAllNews()
