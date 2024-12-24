(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const P="./assets/cover-Q2XI0Ycw.jpg";function _(t){return typeof t=="string"&&t.length>1}function k(t,e=document){if(_(t))return Array.from(e.querySelectorAll(t));if(t instanceof NodeList)return Array.from(t);if(Array.isArray(t))return t;throw new Error("Unknown selector element")}function c(t,e){if(_(t)){const a=k(t,e);if(a.length>1&&console.warn(`selector ${t} return more then one element`),a.length===0)throw new Error(`selector ${t} return nothing`);return a.pop()}if(t instanceof HTMLElement)return t;throw new Error("Unknown selector element")}function z(t,e,a){return document.createElement(t)}function g(t,e,a){const r=a.content.cloneNode(!0).querySelector(`.${e}-item`),n=r.querySelector(`.${e}-header`),o=r.querySelector(`.${e}-price`),d=r.querySelector(`.${e}-description`),u=r.querySelector(`.${e}-filling-list`),l=r.querySelector(`.${e}-filling-title`);return n.textContent=t.name,o.textContent=t.price,d.textContent=t.description,t.filling&&(l.textContent="Filling:",t.filling.forEach(m=>{const q=z("li");q.textContent=m,u==null||u.append(q)})),r}const M="./assets/apple-pie-BLNI29cq.jpg",j="./assets/lamb-samsa-CA8pVDoR.jpg",A="./assets/puff-pastry-with-jam-BjdLcant.jpg",L="./assets/sour-cream-pie-BLMMpl1B.jpg",U="./assets/tandoor-bread-DJMzwm20.jpg",I="./assets/tatar-manti-Cmk20sue.jpg",T="./assets/sandwich-bread-BzZ7Jdgy.jpg",D="./assets/kefir-D6ErrhAB.jpg",R=[{name:"Tandoor bread",price:"20 / 25",description:"Wheat flour, salt, yeast, sesame",imgUrl:U,category:"bread"},{name:"Rye bread",price:"30",description:"Rye flour, wheat flour, yeast, sugar, salt",category:"bread"},{name:"Sandwich bread",price:"20",description:"Wheat flour, yeast, egg, margarine, salt",imgUrl:T,category:"bread"},{name:"raisin bread",price:"20",description:"Wheat flour, yeast, raisins, egg, margarine, sugar, salt",category:"bread"},{name:"lamb samsa",price:"55",description:"Puff pastry, lamb, onion, sesame, cumin, egg, salt",imgUrl:j,category:"dishes"},{name:"Pilaf",price:"120",description:"Rice, lamb, carrots, chickpeas, onions, cumin, garlic, black pepper, salt, vegetable oil",category:"dishes"},{name:"Tatar manti",price:"100",description:"Beef, potatoes, onions, dough, butter, pepper, salt",imgUrl:I,category:"dishes"},{name:"Beef Tongue Julienne",price:"75",description:"Beef tongue, mushrooms, mozarella, onion, whipping cream",category:"dishes"},{name:"Lula-Kebab in Dough",price:"50",description:"Beef, onion, zira, pepper, puff pastry",category:"dishes"},{name:"Liver Cake",price:"45",description:"Beef liver, egg, carrot, onion, cheese, garlic, homemade mayo, cilantro, dill",category:"dishes"},{name:"Minced Beef Pancake ",price:"40",description:"Minced beef, onion, pepper, flour, egg, milk",category:"dishes"},{name:"Pizza Calzone",price:"60",description:"Chicken, straw mushrooms, mozarella, salted cucumber, bell pepper, tomato sauce",category:"dishes"},{name:"Pumpkin soup",price:"35",description:"Pumpkin, whipping cream, pumpkin seeds, mozarella",category:"dishes"},{name:"beef stew",price:"40",description:"Beef, carrots, onions, braised beef sauce, lemongrass",category:"dishes"},{name:"Korean Carrot",price:"40",description:"Carrot, vinegar, garlic, pepper",category:"dishes"},{name:"sour cream pie",price:"30",description:"Homemade sour cream, flour, butter, sugar, vanillin, egg",imgUrl:L,category:"desserts"},{name:"sponge cake",price:"15",description:"Wheat flour, pastry flour, egg, milk, sugar, corn starch, salt",category:"desserts"},{name:"Apple pie",price:"30",description:"Apples, flour, butter, sugar, egg, cinnamon, cocoa",imgUrl:M,category:"desserts"},{name:"chocolate halva",price:"6",description:"Sunflower seeds, cocoa, honey",category:"desserts"},{name:"oat cookie",price:"6",description:"Oat flakes, butter, egg, sugar, baking powder",category:"desserts"},{name:"сottage cheese puff pastry",price:"25",description:"Puff pastry, sugar, сottage cheese",category:"desserts"},{name:"cottage cheese sochnik",price:"40",description:"Cottage cheese, flour, butter, sugar, egg",category:"desserts"},{name:"puff pastry with jam",price:"20",description:"Puff pastry, sugar, egg",filling:["pineapple","passion fruit","berry mix","apple-cinnamon","honey-peach"],imgUrl:A,category:"desserts"},{name:"homemade sour cream",price:"75",description:"300 g",category:"dairy"},{name:"ryazhenka",price:"65",description:"330 ml",category:"dairy"},{name:"kefir",price:"50",description:"330 ml",imgUrl:D,category:"dairy"},{name:"snowball",price:"50",description:"330 ml",category:"dairy"}],O=[{userName:"Maikl Rid",reviewText:"It’s just unbelievable that something like this exists in Da Nang. A real gem. The bakery itself is located right at the market, so eating there isn’t really an option, but taking it to go and enjoying it at a cozy cafe or at home is just perfect"},{userName:"Elizaveta P.",reviewText:"Amazing pilaf, delicious meat, not dry, perfectly juicy and fatty as it should be, great packaging - everything is perfect!"},{userName:"Mark Mazalo",reviewText:"Rustic artisan bakery within the local market in Da Nang that puts out great quality products. I tried the new pizza yesterday and it was awesome. Great crust - not floppy like other in town - good toppings and a lot of cheese for the great price they sell for. I highly recommend the Pizza, Banh Mi, the lamb in pastry, the cakes and other products. You can’t beat the price or quality"}];function y(t,e,a,i){const n=a.content.cloneNode(!0).querySelector(`.${e}-item`),o=n.querySelector(`.${e}-card`),d=o.querySelector(`.${e}-header`),u=o.querySelector(`.${e}-description`),l=o.querySelector(`.${e}-image`),m=o.querySelector(".button");return d.textContent=t.name,u.textContent=t.description,t.imgUrl?l.src=t.imgUrl:console.log("Изображение не найдено"),l.alt=t.name,i?m.textContent="buy":m.textContent="buy on grab",n}function E(t,e,a){const r=a.content.cloneNode(!0).querySelector(`.${e}-item`),n=r.querySelector(`.${e}`),o=n.querySelector(`.${e}-name`),d=n.querySelector(`.${e}-description`);return o.textContent=t.userName,d.textContent=t.reviewText,r}const h=c("#menu-item"),f=c("#card-image"),H=c("#card-review"),w="menu__position-list",b="menu__images-list",W=".section__reviews_list",C="menu__images",v="menu__position",J="review__card",x=c(".header__button"),S=c(".header__nav_list-link-menu"),K=c(".header__nav_list-link-contacts"),B=window.matchMedia("(max-width: 1100px)").matches,p=window.matchMedia("(max-width: 720px)").matches,$=document.querySelector(".cover__image");$&&($.src=P);function s(t,e){const a=document.querySelector(t),i=e;a==null||a.append(i)}function F(t){t.forEach(e=>{e.category==="bread"?s(`.${w}-bread`,g(e,v,h)):e.category==="dishes"?s(`.${w}-dishes`,g(e,v,h)):e.category==="dairy"?s(`.${w}-dairy`,g(e,v,h)):s(`.${w}-desserts`,g(e,v,h)),e.imgUrl&&(e.category==="bread"?s(`.${b}-bread`,y(e,C,f,p)):e.category==="dishes"?s(`.${b}-dishes`,y(e,C,f,p)):e.category==="dairy"?s(`.${b}-dairy`,y(e,C,f,p)):s(`.${b}-desserts`,y(e,C,f,p)))})}function N(t){t.forEach(e=>s(W,E(e,J,H)))}F(R);N(O);B?x.textContent="buy":x.textContent="Buy on grab";B?S.textContent="menu":S.textContent="our menu";p&&(K.textContent="contacts");