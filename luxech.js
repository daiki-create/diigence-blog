/*
 * フッターに 追加したい Javascript 等を以下に記述してください。
 * ( To add Javascript in the footer, please write down here. )
 */


$("#sitename a").attr("href" , "https://diigence.com");

// ハンバーガーメニュー
$("#sitename").after(
"<div class='s-header__navbar-row-col'>"+
    "<a href='javascript:void(0);' class='s-header__trigger js__trigger'>"+
        "<span class='s-header__trigger-icon'></span>"+
        "<svg x='0rem' y='0rem' width='3.125rem' height='3.125rem' viewbox='0 0 54 54'>"+
            "<circle fill='transparent' stroke='#fff' stroke-width='1' cx='27' cy='27' r='25' stroke-dasharray='157 157' stroke-dashoffset='157'></circle>"+
        "</svg>"+
    "</a>"+
"</div>"
);

// ハンバーガーメニュー
// $("#sitename").after("<div class='s-header__navbar-row-col'><a href='javascript:void(0);' class='s-header__trigger js__trigger'><span class='s-header__trigger-icon'></span><svg x='0rem' y='0rem' width='3.125rem' height='3.125rem' viewbox='0 0 54 54'><circle fill='transparent' stroke='#fff' stroke-width='1' cx='27' cy='27' r='25' stroke-dasharray='157 157' stroke-dashoffset='157'></circle></svg></a></div>");

$("#head-in").after(
    "<div class='s-header-bg-overlay js__bg-overlay'>"+
        "<nav class='s-header__nav js__scrollbar'>"+
            "<div class='container-fluid'>"+
                "<ul class='list-unstyled s-header__nav-menu'>"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider' href='#corporate'>Corporate</a></li>"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider' href='#events'>Events</a></li>"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider' href='#mail'>メアド会員</a></li>"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider hidden-xs' href='#voice'>推薦の声</a></li>"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider visible-xs' href='#sp-voice'>推薦の声</a></li>"+
                    "<!-- <li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider' href='#'>お客様の声</a></li> -->"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider' href='#faq'>FAQ</a></li>"+
                    "<li class='s-header__nav-menu-item close-menu'><a class='s-header__nav-menu-link s-header__nav-menu-link-divider' href='#contacts'>Contacts</a></li>"+
                "</ul>"+
            "</div>"+
        "</nav>"+
    "</div>"
)

$("footer").after(
    "<script type='text/javascript' src='https://diigence.com/js/global.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/header-sticky.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/scrollbar.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/magnific-popup.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/swiper.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/counter.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/portfolio-3-col.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/parallax.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/google-map.min.js'></script>"+
    "<script type='text/javascript' src='https://diigence.com/js/components/wow.min.js'></script>"
)