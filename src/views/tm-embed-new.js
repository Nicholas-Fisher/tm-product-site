if (Boolean(window._tapmenu_embedScript)) {
  console.error('The Tap Menu widget has already been embedded.')
} else {

  function initTapMenuWidget() {

    const permalinkId = window._tapmenu_embedScript.getAttribute('permalink-id');
    const code = window._tapmenu_embedScript.getAttribute('code');
    const maxWidth = window._tapmenu_embedScript.getAttribute('max-width') || 500;
    const maxHeight = window._tapmenu_embedScript.getAttribute('max-height') || 800;
    const backgroundColor = window._tapmenu_embedScript.getAttribute('background-color') || '#111';
    const fontColor = window._tapmenu_embedScript.getAttribute('font-color') || '#fff';
    const right = parseInt(window._tapmenu_embedScript.getAttribute('right')) || 35;
    const left = parseInt(window._tapmenu_embedScript.getAttribute('left')) || null;
    const bottom = parseInt(window._tapmenu_embedScript.getAttribute('bottom')) || 25;
    const zIndex = parseInt(window._tapmenu_embedScript.getAttribute('z-index')) || 999999;

    function getLang() {
      if (navigator.languages != undefined)
        return navigator.languages[0];
      else
        return navigator.language;
    }

    const language = getLang() || 'en';

    let promptMsg = 'Press here for the menu';
    let closeMsg = 'Tap here to close the menu';
    let menu = 'Start Order';

    if (language.includes('fr')) {
      promptMsg = 'Cliquez ici pour le menu';
      closeMsg = 'Appuyez ici pour fermer le menu';
      menu = 'Ordre de départ';
    } else if (language.includes('es')) {
      promptMsg = 'Presione aquí para el menú';
      closeMsg = 'Toca aquí para cerrar el menú';
      menu = 'Orden de inicio';
    } else if (language.includes('zh')) {
      promptMsg = '按此处查看菜单';
      closeMsg = '点按此处关闭菜单';
      menu = '开始订单';
    } else if (language.includes('de')) {
      promptMsg = 'Drücken Sie hier für das Menü';
      closeMsg = 'Tippen Sie hier, um das Menü zu schließen';
      menu = 'Bestellung starten';
    }

    // Getting the proper url for the iframe.
    let url = 'https://tapmenu.app?e=true';
    if (permalinkId) {
      url = `https://tapmenu.app/${permalinkId}/?e=true`;
    } else if (code) {
      url = `https://tapmenu.app?e=true&c=${code}`;
    }

    // Adding the html
    const tmEmbedContainter = document.createElement('div');
    tmEmbedContainter.id = '_tapmenu_embed';
    tmEmbedContainter.innerHTML = `
      <div id="_tapmenu_full-screen-dimmer">
      </div>
      <div id="_tapmenu_click-here-to-order">${promptMsg}</div>
      <button id="_tapmenu_tap-menu-btn">
        <div id="_tapmenu_button-text">
          ${menu}
        </div>
        <img id="_tapmenu_close" src="https://api.nickfish.net/img/close.svg" />
      </button>
      <iframe id="_tapmenu_iframe" src="${url}" allowpaymentrequest="true"></iframe>
      <button id="_tapmenu_close-iframe-btn">
        <span>${closeMsg}</span>
      </button>
    `;
    document.body.appendChild(tmEmbedContainter);

    // Adding the google fonts.
    const docHead = document.head;
    const linkEl = document.createElement('link');
    linkEl.type = 'text/css';
    linkEl.rel = 'stylesheet';
    linkEl.href = `https://fonts.googleapis.com/css?family=Poppins`;

    // Adding the styles.
    const styleSheet = document.createElement('style')
    styleSheet.type = "text/css"
    styleSheet.innerText = `
    body._tapmenu_widget-open {
      height: 100vh !important;
      overflow-y: hidden !important;
      padding-right: 15px;
    }
    #_tapmenu_full-screen-dimmer {
      position: absolute;
      z-index: ${zIndex - 1};
      width: 100vw;
      height: 100vh;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      display: none;
    }
    #_tapmenu_embed._tapmenu_show #_tapmenu_full-screen-dimmer {
      display: block;
      position: fixed;
    }
    .full-screen-iframe {
      z-index: ${zIndex};
      height: 100%;
      width: 100vw;
      border: none;
    }
    #_tapmenu_embed {
      z-index: ${zIndex};
      overflow: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-family: "Poppins", Helvetica, Arial, sans-serif !important;
      -webkit-tap-highlight-color: transparent;
    }
    #_tapmenu_embed > * {
      box-sizing: border-box;
      font-family: "Poppins", Helvetica, Arial, sans-serif !important;
    }
    #_tapmenu_logo {
      margin: 0 auto;
      width: 30px;
    }
    #_tapmenu_button-text {
      margin: 0 auto;
    }
    #_tapmenu_close {
      position: relative;
      z-index: ${zIndex};
      top: 1px;
      left: 1px;
      width: 60px;
      display: none;
    }
    #_tapmenu_tap-menu-btn {
      position: fixed;
      z-index: ${zIndex};
      height: 60px;
      ${left === null ? `right: ${right}px` : `left: ${left}px`};
      bottom: ${bottom}px;
      padding: 0 10px;
      border: 3px solid ${fontColor};
      color: ${fontColor};
      font-size: 20px;
      background-color: ${backgroundColor};
      border-radius: 5px;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-transform: uppercase;
      transition: background-color linear 100ms;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Poppins", Helvetica, Arial, sans-serif !important;
    }
    #_tapmenu_tap-menu-btn:focus {
      outline: none;
    }
    #_tapmenu_click-here-to-order {
      position: fixed;
      z-index: ${zIndex};
      font-family: Helvetica, Arial, sans-serif;
      padding: 10px 15px;
      text-align: center;
      ${left === null ? `right: ${right}px` : `left: ${left}px`};
      bottom: ${bottom + 80}px;
      border: 3px solid ${fontColor};
      color: ${fontColor};
      font-size: 18px;
      background-color: ${backgroundColor};
      border-radius: 5px;
      font-weight: bold;
      animation-duration: 5500ms;
      animation-name: _tapmenu_fade-out;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    }
    ${left === null ? `
    @keyframes _tapmenu_fade-out {
      0% {
        opacity: 1;
        right: -300px;
      }
      10% {
        right: ${right}px;
      }
      75% {
        opacity: 1;
        right: ${right}px;
      }
      100% {
        opacity: 0;
        right: -300px;
      }
    }
    ` : `
    @keyframes _tapmenu_fade-out {
      0% {
        opacity: 1;
        left: -300px;
      }
      10% {
        left: ${left}px;
      }
      75% {
        opacity: 1;
        left: ${left}px;
      }
      100% {
        opacity: 0;
        left: -300px;
      }
    }
    `}

    #_tapmenu_iframe {
      position: fixed;
      z-index: ${zIndex};
      border-radius: 5px;
      width: 100%;
      max-height: ${maxHeight}px;
      max-width: ${maxWidth}px;
      overflow: hidden;
      display: none;
      border: 1px solid #888;
    }
    #_tapmenu_close-iframe-btn {
      position: fixed;
      z-index: ${zIndex};
      font-weight: bold;
      overflow: hidden;
      background-color: ${backgroundColor};
      color: ${fontColor};
      bottom: 0;
      left: 0;
      width: 100vw;
      height: 50px;
      font-size: 16px;
      border: none;
      border-top: 1px solid #555;
      text-transform: uppercase;
      cursor: pointer;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      transition: background-color linear 100ms;
      display: none;
    }
    #_tapmenu_close-iframe-btn:focus {
      outline: none;
    }
    #_tapmenu_close-iframe-btn > img {
      width: 45px;
    }
    #_tapmenu_embed._tapmenu_show #_tapmenu_iframe {
      display: inline-block;
    }
    #_tapmenu_embed._tapmenu_show #_tapmenu_tap-menu-btn #_tapmenu_logo {
      display: none;
    }
    #_tapmenu_embed._tapmenu_show #_tapmenu_tap-menu-btn #_tapmenu_button-text {
      display: none;
    }
    #_tapmenu_embed._tapmenu_show #_tapmenu_tap-menu-btn #_tapmenu_close {
      display: inline-block;
    }
    @media (min-width: 769px) {
      #_tapmenu_iframe {
        ${left === null ? `right: ${right}px` : `left: ${left}px`};
        bottom: ${bottom + 70}px;
        height: calc(100% - ${bottom + 90}px);
      }
    }
    @media (max-width: 768px) {
      #_tapmenu_iframe {
        border: none;
        max-height: none;
        max-width: none;
        height: calc(100% - 50px);
        right: 0;
        left: 0;
        bottom: 50px;
        border-radius: 0;
      }
      #_tapmenu_embed._tapmenu_show #_tapmenu_close-iframe-btn {
        display: flex;
      }
    }
    `;
    docHead.appendChild(linkEl);
    docHead.appendChild(styleSheet);

    const container = document.getElementById('_tapmenu_embed');
    const button = document.getElementById('_tapmenu_tap-menu-btn');
    const closeButton = document.getElementById('_tapmenu_close-iframe-btn');
    const dimmer = document.getElementById('_tapmenu_full-screen-dimmer');

    const toggleFunction = () => {
      console.log('toggleFunction', document.body);
      document.body.classList.toggle('_tapmenu_widget-open');
      container.classList.toggle('_tapmenu_show');
    };

    button.onclick = toggleFunction;
    closeButton.onclick = toggleFunction;
    dimmer.onclick = toggleFunction;

    const height = (window.innerHeight > 0) ? window.innerHeight : screen.height;

    const appHeight = () =>
      document.documentElement.style.setProperty(
        "--app-height",
        `${height}px`
      );
    window.addEventListener("resize", appHeight);
    appHeight();

    setTimeout(() => {
      document.getElementById('_tapmenu_click-here-to-order').style.display = 'none';
    }, 5000);
  }

  window._tapmenu_embedScript = document.currentScript;

  if (document.readyState !== 'loading') {
    initTapMenuWidget();
  } else {
    document.addEventListener('DOMContentLoaded', () => {
      initTapMenuWidget();
    });
  }
}
