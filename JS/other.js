// 重整時回到頂部
window.addEventListener('beforeunload', function () {
    window.scrollTo(0, 0);
});

const menu_btn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const a = document.querySelectorAll(".list-a");
const news = document.querySelector('.news');
const news_phone = document.querySelector('.news-phone');


//改變背景顏色
const navHamburger = document.querySelectorAll('.menu-btn-line')
const banner = document.querySelector('.banner')
const bg_color = document.querySelector('.web')
const wb0 = document.querySelector('.web-border-0')
const wt = document.querySelector('.web-title')
const wborder1 = document.querySelector('.web-border-1')
const wborder2 = document.querySelector('.web-border-2')
const coockie = document.querySelector('.animate-4')
const shop = document.querySelector('.shop')
const shop_frame = document.querySelector('.shop-frame')
const shop_mask = document.querySelector('.shop-mask')
const how_to_buy = document.querySelector('.how-to-buy')
const how_left = document.querySelector('.how-left')
const how_midline = document.querySelector('.how-midline')
const how_right = document.querySelector('.how-right')
const how_dscp = document.querySelector('.how-dscp')
const how_dscp_li = document.querySelectorAll('.how-dscp-li')
const dscp_li = document.querySelectorAll('.dscp-li')
const aboutus = document.querySelector('.aboutus')
const about_card = document.querySelector('.aboutus-card')
const aboutus_BG = document.querySelector('.aboutus-BG')
const aboutus_h1 = document.querySelector('.aboutus-h1')
const En_anim = document.querySelectorAll('.En-anim')
const Ch_anim = document.querySelectorAll('.Ch-anim')




function updateNav() {
    const scroll = window.pageYOffset;
    if (scroll < 1800) {
        navHamburger.forEach(e => {
            e.classList.remove('menu-btn-line-dark');
            e.classList.add('menu-btn-line-light');
        });
    } else if (scroll < 4700) {
        navHamburger.forEach(e => {
            e.classList.remove('menu-btn-line-light');
            e.classList.add('menu-btn-line-dark');
        });
    }

}
function updateBanner() {
    const scroll = window.pageYOffset;
    if (scroll < 200) {
        // 初始
        bg_color.style.backgroundColor = '#ffffe8';
    } else if (scroll >= 200 && scroll < 1600) {
        banner.style.filter = `brightness(${1 - scroll / 5000})`
        wborder1.style.transform = `scale(1)`

    } else if (scroll >= 1600 && scroll <= 2000) {

    } else if (scroll > 2000 && scroll < 2900) {
    } if (scroll >= 3000 && scroll < 4900) {
    }
}
// function updateShopFrame() {
//     const scroll = window.pageYOffset;
//     if (scroll < 1600) {
//         shop_frame.style.width = '91%'
//         shop_frame.style.margin = `0 0 0 -45.5%`
//         shop_frame.style.top = `${1000 - (scroll) / 2}px`
//         shop_frame.style.borderRadius = ` ${1600 - (scroll - 300)}px`
//     } else if (scroll >= 1600 && scroll < 2600) {
//         shop_frame.style.width = `100%`
//         shop_frame.style.margin = `0 0 0 -50%`
//         shop_frame.style.top = `${1000 - (scroll - 750) / 1}px`
//         shop_frame.style.borderRadius = ` ${1600 - (scroll - 300)}px`
//     } else if (scroll >= 3000 && scroll < 5000) {
//         shop_frame.style.filter = `brightness(${1 - (scroll - 3000) / 3000})`
//     }
//     if (scroll >= 4000) {
//         shop_frame.style.top = `${250 - (scroll) / 4}px`
//     }

// }
function updateShopFrame() {
    const scroll = window.pageYOffset;
    const screenwidth = document.body.clientWidth;

    // 計算 top 和 borderRadius 的值
    let top, width, borderRadius, margin, display;

    if (scroll < 1600) {
        top = 1000 - (scroll) / 2;
        width = 91;
        borderRadius = 1600 - (scroll - 300);
        margin = '0 0 0 -45.5%';
    } else if (scroll >= 1600 && scroll < 2600) {
        top = 1000 - (scroll - 750) / 1;
        width = 100;
        borderRadius = 1600 - (scroll - 300);
        margin = '0 0 0 -50%';
    } else if (screenwidth < 800 && scroll >= 3000 && scroll < 3800) {
        top = 1000 - (scroll + 3750) / 3;
        display = 'block'
    } else if (screenwidth < 800 && scroll >= 3800) {
        display = 'none'
    } else if (scroll >= 4000) {
        top = 250 - (scroll) / 4;
    }

    // 計算 filter 的值
    let brightness;
    if (scroll >= 3000 && scroll < 5000) {
        brightness = `brightness(${1 - (scroll - 3000) / 3000})`;
    }

    shop_frame.style.top = `${top}px`;
    shop_frame.style.width = `${width}%`;
    shop_frame.style.borderRadius = `${borderRadius}px`;
    shop_frame.style.margin = `${margin}`;
    shop_frame.style.filter = `${brightness}`;
    shop_frame.style.display = `${display}`;
}
function updateHowToBuy() {
    const scroll = window.pageYOffset;
    if (document.body.clientWidth < 800) {
        updateStylesHowToBuySmallScreens(scroll);
    } else {
        updateStylesHowToBuyLargeScreens(scroll);
    }

    function updateStylesHowToBuyLargeScreens(scroll) {
        let how_to_buy_top, how_to_buy_borderRadius, how_left_width, how_right_width, how_right_top, how_dscp_height, how_midline_height;
        if (scroll >= 3100) {
            how_to_buy_borderRadius = 1600 - (scroll - 3300)
        }
        if (scroll >= 3100 && scroll <= 4400) {
            how_to_buy_top = 1000 - (scroll - 3100) / 2
        } else if (scroll > 4400) {
            how_to_buy_top = 1000 - (scroll - 3700) / 1
        }
        if (scroll >= 4600 && scroll <= 5400) {
            how_left_width = 65 - (scroll - 4600) / 30
            how_right_width = 25 + (scroll - 4600) / 30
            how_dscp_height = `${0 + (scroll - 4600) / 10}vh`
            how_midline_height = 0
        } else if (scroll > 5400 && scroll < 5800) {
            how_midline_height = 160
            how_left_width = 38.3
            how_right_width = 51.6
            how_right_top = 0
        } else if (scroll >= 5800) {
            how_right_top = -(scroll - 5800) / 1
            how_midline_height = 0
        }
        how_dscp_li.forEach(e => {
    
            if (scroll <= 5400) {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[0].children[0].style.transform = "rotate(0deg)"
                e.children[0].children[0].style.filter = 'brightness(1)'
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            } else if (scroll > 5400 && scroll < 5800) {
                e.style.opacity = `1`
                e.style.transform = `translateX(5px);`
            } else {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[0].children[0].style.transform = "rotate(0deg)"
                e.children[0].children[0].style.filter = 'brightness(1)'
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            }
        });
    
        
        how_to_buy.style.top = `${how_to_buy_top}px`
        how_to_buy.style.borderRadius = `${how_to_buy_borderRadius}px`
        how_left.style.width = `${how_left_width}%`
        how_right.style.width = `${how_right_width}%`
        how_right.style.top = `${how_right_top}px`
        how_dscp.style.height = `${how_dscp_height}`
        how_midline.style.height = `${how_midline_height}%`
    }
    function updateStylesHowToBuySmallScreens(scroll) {
        let how_to_buy_top, how_to_buy_borderRadius, how_left_width, how_right_width, how_right_top, how_dscp_height, how_midline_height;
    
        if (scroll >= 2900) {
            how_to_buy_borderRadius = 400 - (scroll - 2900) / 2
        }
        if (scroll >= 2900 && scroll <= 4200) {
            how_to_buy_top = 750 - (scroll - 2900) / 1
        } else if (scroll > 4200) {
            how_to_buy_top = 750 - (scroll - 2900) / 1
        }
        if (scroll <= 4100) {
            how_left_width = 90
            how_right_width = 90
            how_dscp_height = `${0 + 272 * (scroll - 3800) / 300}px`
        } else if (scroll > 4100 && scroll < 4800) {
            how_dscp_height = 'auto'
        } else {
            how_dscp_height = `${272 - 272 * (scroll - 4800) / 250}px`
        }
        how_dscp_li.forEach(e => {
    
            if (scroll <= 4100) {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            } else if (scroll > 4100 && scroll < 4800) {
                e.style.opacity = `1`
                e.style.transform = `translateX(5px);`
            } else {
                e.style.opacity = `0`
                e.style.transform = `translateX(-5px);`
                e.setAttribute(`data-state`, `off`)
                e.children[1].innerHTML = ""
                e.children[1].style.height = '0'
            }
        });
    
        how_to_buy.style.top = `${how_to_buy_top}px`
        how_to_buy.style.borderRadius = `${how_to_buy_borderRadius}px`
        how_left.style.width = `${how_left_width}%`
        how_right.style.width = `${how_right_width}%`
        how_right.style.top = `${how_right_top}px`
        how_dscp.style.height = `${how_dscp_height}`
        how_midline.style.height = `${how_midline_height}%`
    }
    //RWD
    // if (document.body.clientWidth < 1366) {
    //     how_dscp.style.height = `${20 + (scroll - 4600) / 10}vh`
    //     if (scroll >= 4600 && scroll <= 5400) {
    //         how_left.style.width = `${55 - (scroll - 4600) / 30}%`
    //         how_right.style.width = `${35 + (scroll - 4600) / 30}%`
    //     } else if (scroll > 5400 && scroll < 5800) {
    //         how_left.style.width = `28.3%`
    //         how_right.style.width = `61.6%`
    //     }
    // }
}


function updateAboutUs() {
    const scroll = window.pageYOffset;


    if (document.body.clientWidth < 800) {
        const scroll = window.pageYOffset;
        if (scroll < 4900) {
            aboutus.style.top = `${800 - (scroll - 4700) / 1}px`
        } else if (scroll >= 4900 & scroll <= 8200) {
            aboutus.style.top = `${800 - (scroll - 4700) / 1}px`
            aboutus_BG.style.display = 'none'
        } else if (scroll <= 8800) {
            aboutus.style.top = `${1000 - (scroll - 4900) / 1}px`
        } else if (scroll > 8800) {
            aboutus.style.top = `-2900px`
        }
        if (scroll >= 5000 && scroll <= 5500) {
            aboutus_h1.style.opacity = '1'
        }
        if (scroll >= 5500 && scroll <= 6100) {
            //Aboutus變色效果
            const [red, green, blue] = [241, 233, 225]
            const x = 1 + (scroll - 5500) / 342
            const y = 1 + (scroll - 5500) / 252
            const z = 1 + (scroll - 5500) / 204
            const [r, g, b] = [red / x, green / y, blue / z].map(Math.round)
            about_card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            aboutus_h1.style.color = `rgb(${64 * 1.4 * x}, ${40 * 1.7 * y}, ${27 * 2.1 * z})`

            //Aboutus scroll效果
            aboutus_BG.style.display = 'block'
            aboutus_BG.style.opacity = `${(scroll - 5500) / 1000}`
            about_card.style.width = `${110 - (scroll - 5500) / 10}%`
            about_card.style.height = `${170 - (scroll - 5500) / 100 * 14.1}vh`
            about_card.style.borderRadius = `0 0 ${about_card.clientWidth / 2}px ${about_card.clientWidth / 2}px`

            //Aboutus 文字動畫初始狀態
            En_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
            Ch_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
        } else if (scroll > 6100) {
            aboutus_BG.style.display = 'block'
            about_card.style.backgroundColor = `rgb(68, 47, 33)`

            //Aboutus 文字動畫
            for (let index = 0; index < En_anim.length; index++) {
                const p = En_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 16}s`
            }
            for (let index = 0; index < Ch_anim.length; index++) {
                const p = Ch_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 16}s`
            }
        } else {
            about_card.style.backgroundColor = `rgb(241, 233, 225)`
        }
        if (scroll >= 5500 && scroll <= 6100) {
            about_card.style.width = `${110 - (scroll - 5500) / 15}%`
        }
        if (scroll <= 8100) {
            aboutus_BG.style.top = `0px`
        }
        else if (scroll > 8100 && scroll < 8800) {
            aboutus_BG.style.top = `${0 - (scroll - 8100) / 1}px`
        } else {
            aboutus_BG.style.top = `-700px`
        }

    } else if (document.body.clientWidth < 1366) {

        if (scroll >= 7900 && scroll <= 8500) {
            about_card.style.width = `${110 - (scroll - 7900) / 15}%`
        }
    } else {
        const scroll = window.pageYOffset;
        if (scroll < 5900) {
            aboutus.style.top = `${1000 - (scroll - 5900) / 1}px`
        } else if (scroll >= 5900 & scroll <= 9200) {
            aboutus.style.top = `${1000 - (scroll - 5900) / 1}px`
            aboutus_BG.style.display = 'none'
        } else if (scroll <= 9800) {
            aboutus.style.top = `${1000 - (scroll - 5900) / 1}px`
        } else if (scroll > 9800) {
            aboutus.style.top = `-2900px`
        }
        if (scroll >= 7400 && scroll <= 7900) {
            aboutus_h1.style.opacity = '1'
        }
        if (scroll >= 7900 && scroll <= 8500) {
            //Aboutus變色效果
            const [red, green, blue] = [241, 233, 225]
            const x = 1 + (scroll - 7900) / 342
            const y = 1 + (scroll - 7900) / 252
            const z = 1 + (scroll - 7900) / 204
            const [r, g, b] = [red / x, green / y, blue / z].map(Math.round)
            about_card.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
            aboutus_h1.style.color = `rgb(${64 * 1.4 * x}, ${40 * 1.7 * y}, ${27 * 2.1 * z})`

            //Aboutus scroll效果
            aboutus_BG.style.display = 'block'
            aboutus_BG.style.opacity = `${(scroll - 7900) / 1000}`
            about_card.style.width = `${110 - (scroll - 7900) / 10}%`
            about_card.style.height = `${170 - (scroll - 7900) / 100 * 14.1}vh`
            about_card.style.borderRadius = `0 0 ${about_card.clientWidth / 2}px ${about_card.clientWidth / 2}px`

            //Aboutus 文字動畫初始狀態
            En_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
            Ch_anim.forEach(e => {
                e.style.top = '5px'
                e.style.opacity = '0'
                e.style.transition = `0.3s ease`
            });
        } else if (scroll > 8500) {
            aboutus_BG.style.display = 'block'
            about_card.style.backgroundColor = `rgb(68, 47, 33)`

            //Aboutus 文字動畫
            for (let index = 0; index < En_anim.length; index++) {
                const p = En_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 34}s`
            }
            for (let index = 0; index < Ch_anim.length; index++) {
                const p = Ch_anim[index];
                p.style.opacity = '1'
                p.style.top = '0'
                p.style.transition = `0.3s ease ${index / 16}s`
            }
        } else {
            about_card.style.backgroundColor = `rgb(241, 233, 225)`
        }
        if (scroll <= 9100) {
            aboutus_BG.style.top = `0px`
        }
        else if (scroll > 9100 && scroll < 9800) {
            aboutus_BG.style.top = `${0 - (scroll - 9100) / 1}px`
        } else {
            aboutus_BG.style.top = `-700px`
        }
    }
}

window.addEventListener('scroll', function () {
    const scroll = window.pageYOffset;
    console.log(scroll);
    window.requestAnimationFrame(updateNav);
    window.requestAnimationFrame(updateBanner);
    window.requestAnimationFrame(updateShopFrame);
    window.requestAnimationFrame(updateHowToBuy);
    window.requestAnimationFrame(updateAboutUs);
});




var how_detail = [{
    detail: `Our products are limited.
    Booking desserts on the day ,please call us directly: (04) 2378 - 0238. Otherwise
    please leave a message through FB or IG. We closed on Tuesday and Wednesday.<br/><br/>
    現場購買，手工製做，數量有限
當天預留：請直接打電話到店裡(04) 2378 - 0238
提前預留：請在禮拜二、三公休日之外，私訊 FB或IG`
}, {
    detail: `Please ask us through FB or IG message.<br/><br/>
    請私訊FB或IG詢問`
}, {
    detail: `Please order at least a week previously through IG or FB message.
    Huge order need at least 2-3 weeks.
    Spirited Bakery is available on UberEats as well.<br/><br/>
    請提前⾄少1-2個禮拜，⼤量請提前2-3個禮拜，私訊FB或IG
在UberEats App上搜尋「Spirited Bakery」，有限定可外送範圍`
}]
var str = "";

how_dscp_li.forEach((e, index) => {
    console.log(e.children[0].children[0].children[0]);
    e.addEventListener('click', function () {

        if (e.dataset.state == 'off') {
            e.setAttribute(`data-state`, `on`)
            str = `${how_detail[index].detail}`;
            e.children[0].children[0].style.transform = "rotate(180deg)"
            e.children[0].children[0].style.filter = 'brightness(1.7)'
            e.children[1].style.height = 'auto'
            e.children[1].innerHTML += str
        } else if (e.dataset.state == `on`) {
            e.setAttribute(`data-state`, `off`)
            e.children[0].children[0].style.transform = "rotate(0deg)"
            e.children[0].children[0].style.filter = 'brightness(1)'
            e.children[1].innerHTML = ""
            e.children[1].style.height = '0'
        }

    }, false);

});


// 選單列開關JS
menu_btn.onclick = function () {
    if (document.querySelector("#menu-btn").checked) {
        closeList();
        let shop_distance = (document.querySelector(".shop").offsetTop - 100)
        let shop_height = document.querySelector(".shop").offsetHeight
        if ((document.documentElement.scrollTop >= shop_distance) && (document.documentElement.scrollTop < (shop_distance + shop_height))) {
            document.querySelectorAll('.menu-btn-line').forEach(element => {
                element.classList.remove('menu-btn-line-light');
                element.classList.add('menu-btn-line-dark');
            });
        }
    }
    else {

        nav.classList.add('d-flex');
        nav.classList.remove('d-none');
        setTimeout(function () {
            nav.style = "opacity:1;";
        }, 100);

        document.querySelectorAll('.menu-btn-line').forEach(element => {
            element.classList.add('menu-btn-line-light');
            element.classList.remove('menu-btn-line-dark');
        });
    }
}
//漢堡條樣式切換JS
function clicklinkEvent(index) {
    closeList();
    document.querySelector('input').checked = false;
    clickEvent(index);
}
function closeList() {
    nav.style = "opacity:0;";
    setTimeout(function () {
        nav.classList.remove('d-flex');
        nav.classList.add('d-none');
    }, 500);

}

// 如果點選網頁內連結，關閉選單列（外聯不關閉）
a.forEach((element, index) => {

    element.onclick = function () {
        closeList();
        document.querySelector('input').checked = false;
        if (index == 0) {
            to_how_to_buy();
        }
        else {
            to_about_us();
        }
    }
});

//看全部菜單按按鈕打開、點背景關閉
function view_all_menu() {
    let view_menu;
    if (document.body.clientWidth > 1199) {
        view_menu = document.querySelector('.view-menu');

    }
    else {
        view_menu = document.querySelector('.view-menu-phone');
    }
    view_menu.style = "opacity:1";
    view_menu.classList.remove('d-none');
}
function view_all_menu_close() {
    let view_menu
    if (document.body.clientWidth > 1199) {
        view_menu = document.querySelector('.view-menu');
    }
    else {
        view_menu = document.querySelector('.view-menu-phone');
    }

    if (view_menu == event.target) {
        view_menu.style = "opacity:0";
        setTimeout(function () {
            view_menu.classList.add('d-none');
        }, 1000);
    }
}

//關閉最新消息
function closeNews() {
    news.style = 'display:none';
    news_phone.style = 'display:none';
    window.scrollTo(0, 0)

}
// news.addEventListener('click', event => {
//     if (news == event.target) {
//         news.style = "opacity:0";
//         setTimeout(function () {
//             news.style = 'display:none'
//         }, 1000);
//         window.scrollTo(0, 0)
//     }
// });

news_phone.addEventListener('click', event => {
    if (news_phone == event.target) {
        news_phone.style = "opacity:0";
        setTimeout(function () {
            news_phone.style = 'display:none'
        }, 1000);
        window.scrollTo(0, 0)
    }
});

// 跳轉至HOW TO BUY
// function to_how_to_buy() {
//     if (document.body.clientWidth > 599) {
//         window.scrollTo(0, 4500)
//     }
//     else {
//         window.scrollTo(0, 3000)
//     }

// }

// 跳轉至ABOUT US
function to_about_us() {
    window.scrollTo(0, 7000)

}

