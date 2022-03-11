"use strict";
exports.id = 394;
exports.ids = [394];
exports.modules = {

/***/ 3394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ MyModal6)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_svg_SVGArena__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5394);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

/* eslint-disable prettier/prettier */ 


function MyModal6() {
    let { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    function closeModal() {
        setIsOpen(false);
    }
    function openModal() {
        setIsOpen(true);
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "inset-0 flex flex-col items-center justify-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: " left-16 mx-auto mt-[130vh] flex flex-col w-full items-center justify-start px-12 md:absolute md:-mt-40 md:w-4/12",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            typ1e: "button",
                            className: "inline-flex flex-col items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 font-sans text-xl font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 md:text-4xl lg:mb-6",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                    className: "w-16 h-16",
                                    fill: "#ffffff",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "ui btn",
                                    href: "mailto:rettungsanker-freiburg@gmx.de?Subject=Enquiry",
                                    children: "Reservationen"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: ""
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                appear: true,
                show: isOpen,
                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
                    as: "div",
                    className: "fixed inset-0 z-10 overflow-y-auto",
                    onClose: closeModal,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "min-h-screen px-4 text-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                                    className: "fixed inset-0 bg-slate-500/75"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "inline-block h-screen align-middle",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                                as: react__WEBPACK_IMPORTED_MODULE_2__.Fragment,
                                enter: "ease-out duration-300",
                                enterFrom: "opacity-0 scale-95",
                                enterTo: "opacity-100 scale-100",
                                leave: "ease-in duration-200",
                                leaveFrom: "opacity-100 scale-100",
                                leaveTo: "opacity-0 scale-95",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "inline-block w-full max-w-7xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 bg-opacity-100 border border-white shadow-xl rounded-2xl",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-5 w-5",
                                            viewBox: "0 0 20 20",
                                            fill: "#797979",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                fillRule: "evenodd",
                                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                clipRule: "evenodd"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
                                            as: "h3",
                                            className: "ml-3 headingA inline mt-16 lg:text-stroke-11 text-[2rem] text-center font-bold leading-6 text-yellow-600 md:text-6xl lg:mt-24 lg:text-5xl",
                                            children: "Tisch - Reservation"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "mt-2 lg:mt-1 ",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                className: "newspaper text-lg text-white 2xl:text-4xl heading-0",
                                                children: [
                                                    "U1nsere Sportarena",
                                                    ' ',
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons_svg_SVGArena__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        className: "inline h-36 w-36"
                                                    }),
                                                    " mit regelm\xe4ssigen Live-\xdcbertragungen der Fussball-Bundesliga erfreut sich immer gr\xf6sserer Beliebtheit. Insbesondere zu den Topspielen des SC Freiburg empfehlen wir eine Tischreservation.",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    " Mit unserem neuen Booking Tool sichern Sie sich die besten Pl\xe4tze in der \"ersten Reihe\" der Fussball-Arena Wir freuen uns auf spannende, torreiche Spiele...!!!",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                    "Ihr Team Rettungsanker"
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-5 flex flex-row justify-evenly gap-5 ",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6",
                                                    onClick: closeModal,
                                                    children: "zur\xfcck"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    type: "button",
                                                    className: "inline-flex justify-center px-4 py-2 text-xl md:text-5xl font-medium font-sans text-blue-900 bg-orange-300 border border-transparent rounded-md hover:bg-orange-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 lg:mb-6",
                                                    onClick: closeModal,
                                                    children: "Tischreservation"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    }));
};

});

/***/ }),

/***/ 5394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const SvgArena = (props)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "210mm",
        height: "149mm",
        viewBox: "0 0 168 119.2",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                strokeWidth: 0.556,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M55.285 111.316c-4.966-.433-4.724-.121-4.724-6.086v-5.333l3.196.354c1.757.195 4.383.497 5.835.672l2.64.318v10.456l-2.362-.094c-1.299-.051-3.362-.18-4.585-.287zm45.853-4.782v-5.293l2.64-.318c1.452-.175 4.078-.477 5.836-.672l3.196-.354v5.306c0 6.147.514 5.676-6.809 6.246l-4.863.379zm-62.249 2.286a135.628 135.628 0 0 1-4.585-1.074l-2.084-.539v-5.323c0-5.251.017-5.32 1.25-4.984.688.187 3.439.765 6.114 1.284l4.863.945v10.345l-1.528-.06c-.841-.033-2.654-.3-4.03-.594zm80.035-4.5v-5.154l6.53-1.31c7.475-1.501 14.906-3.797 18.998-5.87l2.818-1.429v4.103c0 3.259-.229 4.393-1.11 5.514-2.362 3.002-9.26 5.859-19.733 8.17-7.986 1.764-7.503 2.023-7.503-4.024zm-62.805-9.67a72.08 72.08 0 0 1-3.752-.492l-1.806-.298V83.208l2.218.355c1.22.195 4.533.493 7.364.662 8.232.493 7.983.345 5.672 3.372-1.076 1.41-2.249 3.657-2.607 4.994-.638 2.387-.691 2.43-2.897 2.342a85.112 85.112 0 0 1-4.192-.283zm44.884.014c-.15-.261-.58-1.424-.954-2.584-.374-1.16-1.528-3.22-2.564-4.577-2.23-2.922-2.468-2.786 5.744-3.277 2.83-.17 6.144-.468 7.364-.663l2.218-.354v10.614l-1.529.298c-3.275.638-10.019.995-10.279.544zm-62.669-2.747a349.967 349.967 0 0 1-4.863-1.067c-1.19-.28-1.25-.556-1.25-5.624 0-4.124.161-5.267.717-5.054.394.152 3.145.73 6.113 1.283l5.397 1.008v5.168c0 5.946.389 5.674-6.114 4.286zm80.591-4.286v-5.168l5.419-1.01c7.187-1.34 15.618-3.877 19.656-5.915l3.271-1.652v4.102c0 3.326-.22 4.382-1.168 5.586-1.426 1.813-6.121 4.24-11.337 5.86-3.84 1.193-13.567 3.365-15.068 3.365-.604 0-.773-1.126-.773-5.168zm-46.409-8.545c-5.415-.157-17.952-1.165-20.426-1.642l-1.528-.295v-10.6l2.918.346c6.563.778 15.992 1.44 20.565 1.444l4.863.005v5.558c0 4.137-.178 5.53-.695 5.444-.382-.063-2.946-.18-5.697-.26zm11.95-5.303v-5.439l4.863-.005c4.573-.004 14.001-.667 20.565-1.445l2.918-.346v10.6l-1.528.295c-2.506.484-15.005 1.44-21.12 1.615l-5.697.163v-5.438zm-45.36 1.768a85.822 85.822 0 0 1-4.646-1.089l-2.36-.635.217-3.856c.165-2.906.488-4.118 1.312-4.921 1.052-1.027 1.273-1.034 5.956-.186l4.863.88v10.381l-1.528-.06c-.84-.034-2.557-.265-3.814-.514zm79.819-4.594V65.79l5.419-1.008c7.5-1.395 14.138-3.363 18.897-5.602l4.03-1.896v4.066c0 3.29-.223 4.35-1.169 5.551-2.191 2.786-11.029 6.359-20.64 8.344-6.955 1.437-6.537 1.71-6.537-4.286zm15.324-16.393-1.058-1.402 1.83.366c1.005.2 2.172.366 2.593.366 1.322 0 .83.98-.772 1.538-1.323.461-1.681.341-2.593-.868zm-100.36-39.02v-2.78h5.002c2.751 0 5.002.224 5.002.497 0 .274-.702 1.25-1.56 2.168-1.517 1.624-4.653 2.884-7.193 2.89-1.13.003-1.25-.263-1.25-2.776z",
                        fill: "#999"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M69.051 117.986c.54-.14 1.291-.132 1.667.02.377.153-.066.268-.983.257-.917-.011-1.225-.136-.684-.277zm23.899 0c.54-.14 1.291-.132 1.667.02.377.153-.066.268-.983.257-.917-.011-1.225-.136-.684-.277zm-20.009-5.558c.54-.14 1.291-.132 1.667.02.377.153-.066.268-.983.257-.917-.011-1.225-.136-.684-.277zm14.169-.008c.691-.133 1.692-.128 2.223.011.532.14-.034.248-1.257.242-1.223-.006-1.657-.12-.966-.253zm3.952-23.367c-.691-.882-.671-.901.21-.21.535.42.973.857.973.973 0 .457-.457.163-1.183-.763zm-8.37-3.853c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zM17.14 84.05c-.691-.88-.672-.9.21-.209.535.42.972.857.972.973 0 .457-.456.163-1.182-.763zm50.093-21.84c-3.21-.216-7.289-.424-9.065-.462-1.827-.038-3.09-.292-2.91-.584.176-.283-.145-.663-.712-.843-.568-.18-1.613-.946-2.323-1.702-1.249-1.328-1.258-1.41-.29-2.48 2.043-2.257 6.47-3.317 16.572-3.968 19.559-1.26 49.949 1.082 58.477 4.507l1.667.67-1.39.562c-3.853 1.56-17.728 3.48-31.125 4.31-9.943.614-19.718.612-28.902-.01zm-8.997-15.36c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm46.13 0c.402-.16.881-.141 1.066.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm-37.793-.556c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm7.197-11.129c.691-.133 1.692-.128 2.223.011.532.14-.034.248-1.257.242-1.223-.006-1.657-.12-.966-.253zm13.895 0c.691-.133 1.692-.128 2.223.011.532.14-.034.248-1.257.242-1.223-.006-1.657-.12-.966-.253zm-18.059-5.55c.54-.141 1.291-.132 1.667.02.377.153-.066.268-.983.257-.917-.012-1.225-.136-.684-.277zm23.055.017c.382-.154 1.007-.154 1.39 0 .382.154.069.28-.695.28s-1.077-.126-.695-.28zM84.464 9.991V7.212h5.28c2.904 0 5.28.116 5.28.259 0 .56-3.484 4.187-4.023 4.187-.315 0 .086-.518.891-1.152 2.66-2.092 1.962-2.807-2.565-2.624l-4.03.164v1.94c0 1.705.202 1.982 1.668 2.296 1.615.345 1.602.358-.417.422l-2.084.066z",
                        fill: "#85dc75"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M135.593 15.545v-2.779h5.002c3.353 0 5.002.207 5.002.63 0 1.128-3.76 4.207-5.584 4.572-4.087.817-4.42.635-4.42-2.423zM86.961 12.24c-1.473-.282-1.667-.544-1.667-2.258v-1.94l4.03-.163c4.572-.186 5.109.406 2.487 2.742-1.951 1.739-2.778 2.015-4.85 1.619z",
                        fill: "#e3634c"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M145.043 101.486c0-.115.438-.553.973-.973.881-.691.9-.671.21.21-.727.926-1.183 1.22-1.183.763zm-90.699-1.281c.401-.161.88-.141 1.065.043.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.335zm53.912 0c.401-.161.88-.141 1.065.043.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.335zm-51.689-5.558c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm49.466 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm-55.024-.556c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm60.582 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm33.452-9.279c0-.115.438-.553.973-.973.881-.691.9-.671.21.21-.727.926-1.183 1.22-1.183.763zm-86.288-.714c.382-.154 1.007-.154 1.39 0 .382.154.069.28-.695.28s-1.077-.126-.695-.28zm44.464 0c.382-.154 1.007-.154 1.39 0 .382.154.069.28-.695.28s-1.077-.126-.695-.28zm-49.431-.567c.401-.161.88-.141 1.065.043.185.185-.143.317-.73.292-.647-.026-.778-.158-.335-.335zm55.024 0c.401-.161.88-.141 1.065.043.185.185-.143.317-.73.292-.647-.026-.778-.158-.335-.335zm-35.05-4.46c.688-.132 1.813-.132 2.501 0 .688.133.125.241-1.25.241-1.376 0-1.939-.108-1.25-.24zm13.339 0c.688-.132 1.813-.132 2.501 0s.125.241-1.25.241-1.939-.108-1.251-.24zm-24.976-.543c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.158-.335-.336zm38.35 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.158-.335-.336zm-43.908-.555c.401-.161.88-.141 1.065.043.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.335zm49.466 0c.401-.161.88-.141 1.065.043.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.335zm-55.024-.556c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm60.582 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm-66.97-6.846c0-1.987.1-2.8.224-1.806s.123 2.619 0 3.612-.224.181-.224-1.806zm23.027-2.615c.688-.133 1.813-.133 2.501 0 .688.132.125.24-1.25.24-1.376 0-1.939-.108-1.25-.24zm24.733-.006c.84-.128 2.216-.128 3.057 0 .84.127.153.231-1.528.231s-2.37-.104-1.529-.231zm52.662.188c0-.116.438-.553.973-.973.881-.691.9-.671.21.21-.727.926-1.183 1.22-1.183.763zm-85.141-.726c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336zm42.797 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336z",
                        fill: "#3b748e"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M72.375 117.966c.84-.127 2.216-.127 3.057 0 .84.127.153.232-1.529.232s-2.369-.105-1.528-.232zm15.562 0c.84-.127 2.216-.127 3.057 0 .84.127.153.232-1.529.232s-2.369-.105-1.528-.232zm-26.956-.526c.382-.154 1.007-.154 1.39 0 .382.154.069.28-.695.28s-1.077-.126-.695-.28zm40.018 0c.382-.154 1.007-.154 1.39 0 .382.154.069.28-.695.28s-1.077-.126-.695-.28zm-46.097-.567c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm52.801 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm-57.247-.556c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm61.694 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm-43.387-3.903c.688-.133 1.813-.133 2.501 0 .688.132.125.24-1.25.24s-1.939-.108-1.25-.24zm22.51-.006c.84-.128 2.216-.128 3.057 0 .84.127.153.231-1.528.231s-2.37-.104-1.529-.231zM70.153 62.4c.535-.14 1.41-.14 1.945 0 .535.14.098.254-.972.254s-1.508-.114-.973-.254zm21.12 0c.535-.14 1.41-.14 1.945 0 .535.14.098.254-.972.254s-1.508-.114-.973-.254zm-29.7-.553c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336zm39.462 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336zm11.116-1.111c.401-.16.88-.14 1.065.044.185.184-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm4.446-6.67c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm-3.89-.556c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.779-.158-.335-.336zm-58.915-.555c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.779-.158-.335-.335zm53.912 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.779-.158-.335-.335zm-46.99-.562c.542-.14 1.292-.131 1.668.02.376.153-.066.268-.983.257-.917-.011-1.225-.136-.684-.277zm41.13 0c.54-.14 1.29-.131 1.667.02.377.153-.066.268-.983.257-.917-.011-1.225-.136-.684-.277zm-32.795-.57c.845-.127 2.095-.123 2.779.009.683.131-.008.236-1.536.232-1.529-.005-2.088-.112-1.243-.24zm22.224.017c.535-.14 1.41-.14 1.945 0 .535.14.097.254-.973.254s-1.507-.115-.972-.254zm-51.087-2.65c0-.445.212-.678.472-.517.26.16.328.525.152.81-.449.726-.624.644-.624-.293zm9.159-1.238c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336zm63.917 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336zm-58.915-.555c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm53.912 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm-48.101-.562c.54-.14 1.291-.131 1.667.021.377.152-.066.267-.983.256-.917-.011-1.225-.136-.684-.277zm41.685 0c.54-.14 1.291-.131 1.667.021.377.152-.066.267-.983.256-.917-.011-1.225-.136-.684-.277zM49.9 36.837c.401-.16.88-.14 1.065.044s-.143.316-.73.292c-.647-.026-.778-.158-.335-.336zm62.805 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.026-.778-.158-.335-.336zm-57.803-.555c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm52.8 0c.402-.16.881-.141 1.066.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zM28.012 22.767c0-7.184.08-10.122.176-6.53.097 3.59.097 9.468 0 13.06s-.176.653-.176-6.53zm41.037 12.385c.845-.128 2.095-.125 2.779.007.684.132-.008.237-1.536.233-1.529-.005-2.088-.113-1.243-.24zm22.788 0c.845-.128 2.095-.125 2.779.007.684.132-.008.237-1.536.233-1.529-.005-2.088-.113-1.243-.24zm43.414-5.437c0-3.363.093-4.667.203-2.898s.11 4.52-.002 6.114c-.112 1.593-.202.146-.2-3.216zM33.42 29.02c.091-5.576.322-4.926.591 1.668.085 2.064-.034 3.753-.263 3.752-.23 0-.377-2.44-.328-5.42zm95.93-2.778c.266-15.171.466-16.614.578-4.17.062 6.802-.076 12.367-.305 12.367-.23 0-.352-3.688-.273-8.198zM50.457 31.28c.401-.16.88-.14 1.065.044s-.143.316-.73.292c-.647-.027-.778-.158-.335-.336zm61.694 0c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.158-.335-.336zm-56.136-.556c.401-.16.88-.14 1.065.044s-.143.316-.73.292c-.647-.026-.778-.158-.335-.336zm50.578 0c.401-.16.88-.14 1.065.044s-.143.316-.73.292c-.647-.026-.778-.158-.335-.336zm-45.575-.555c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm40.573 0c.401-.16.88-.141 1.065.044.185.184-.143.316-.73.291-.647-.026-.778-.158-.335-.335zm-28.93-.57c.691-.133 1.692-.127 2.223.012.531.139-.034.248-1.257.241-1.223-.006-1.657-.12-.966-.253zm16.112.001c.688-.132 1.813-.132 2.501 0 .688.133.125.241-1.25.241s-1.939-.108-1.251-.24zM38.23 23.5c.401-.161.88-.142 1.065.043s-.143.316-.73.292c-.647-.027-.778-.159-.335-.336zm96.98-7.958c0-1.682.104-2.37.231-1.529.128.841.128 2.217 0 3.057-.127.84-.231.153-.231-1.528zm-42.407-5.28c.718-.765 1.43-1.39 1.583-1.39.153 0-.31.625-1.027 1.39-.718.764-1.43 1.39-1.584 1.39-.152 0 .31-.626 1.028-1.39z",
                        fill: "#646564"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: "M77.133 117.986c.401-.16.88-.14 1.065.044.185.185-.143.316-.73.292-.647-.027-.778-.159-.335-.336zm7.746.012c.383-.155 1.008-.155 1.39 0 .382.154.07.28-.695.28-.764 0-1.077-.126-.695-.28zm-24.976-6.126c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm42.797 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm-48.389-.544c.383-.154 1.008-.154 1.39 0 .382.154.07.28-.695.28-.764 0-1.077-.126-.695-.28zm53.357 0c.383-.154 1.008-.154 1.39 0 .382.154.07.28-.695.28-.764 0-1.077-.126-.695-.28zm-57.419-5.7c.027-4.657.197-5.836.867-6.018.595-.161.64-.089.16.252-.425.303-.744 2.519-.866 6.018l-.194 5.538zm62.676.14c-.08-3.91-.33-5.737-.81-5.931-.544-.22-.54-.29.018-.325 1.11-.068 1.291 1.036 1.092 6.668l-.184 5.238-.116-5.65zm-68.273-1.297c0-3.21.092-4.523.205-2.918.112 1.605.112 4.23 0 5.836-.113 1.605-.205.291-.205-2.918zm73.921 0c0-3.21.092-4.523.205-2.918.112 1.605.112 4.23 0 5.836s-.205.291-.205-2.918zm-57.557-3.715c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm40.573 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm-45.575-.556c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm50.578 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm-46.13-5.002c.4-.16.88-.14 1.065.044.184.185-.144.316-.73.292-.647-.027-.779-.159-.336-.336zm41.65.012c.382-.154 1.007-.154 1.389 0 .382.154.07.28-.695.28-.764 0-1.077-.126-.695-.28zm-47.209-.568c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm52.801 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zM50.1 89.08c-.051-3.115.095-5.78.324-5.924.23-.142.348 1.531.265 3.72-.273 7.149-.493 7.974-.589 2.204zm62.708-.285c-.15-3.272-.077-5.751.164-5.51.24.243.364 2.92.274 5.95l-.163 5.51zm-68.154-.998c0-3.21.092-4.523.205-2.918.112 1.605.112 4.23 0 5.836-.113 1.604-.205.291-.205-2.918zm73.921 0c0-3.21.092-4.523.205-2.918.112 1.605.112 4.23 0 5.836s-.205.291-.205-2.918zm-52.45-.766c0-.115.437-.553.972-.973.882-.691.901-.671.21.21-.726.926-1.183 1.22-1.183.763zm29.941-.763c-.69-.881-.671-.901.21-.21.535.42.973.858.973.973 0 .457-.457.163-1.183-.763zM61.27 84.077c.541-.141 1.292-.132 1.668.02s-.066.268-.983.257c-.917-.012-1.225-.136-.685-.277zm39.462 0c.541-.141 1.292-.132 1.668.02.376.153-.066.268-.983.257-.917-.012-1.225-.136-.685-.277zm-45.273-.55c.402-.161.881-.141 1.066.043.184.185-.144.316-.73.292-.647-.026-.779-.158-.336-.336zm51.69 0c.4-.161.88-.141 1.065.043.184.185-.144.316-.73.292-.647-.026-.779-.158-.336-.336zm-38.1-4.466c.845-.128 2.096-.124 2.78.008.683.132-.008.236-1.537.232-1.528-.004-2.087-.112-1.243-.24zm22.502.007c.688-.133 1.814-.133 2.502 0s.125.24-1.251.24-1.939-.108-1.25-.24zm-31.09-.544c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm41.685 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm-47.243-.556c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.026-.779-.158-.336-.335zm52.801 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.026-.779-.158-.336-.335zM50.25 72.28c.027-4.656.197-5.835.867-6.017.595-.161.64-.089.16.253-.425.302-.744 2.518-.866 6.017l-.194 5.538zm62.676.135c-.099-4.861-.252-5.692-1.088-5.91-.911-.239-.91-.259.018-.319 1.406-.092 1.579.744 1.37 6.647l-.184 5.238-.116-5.656zm-68.37 2.877c.012-.917.136-1.225.277-.684.141.54.132 1.291-.02 1.667-.153.377-.268-.066-.257-.983zm74.02-4.168c0-3.21.091-4.523.204-2.918.112 1.605.112 4.23 0 5.836s-.205.291-.205-2.918zm-44.524-3.178c.845-.128 2.096-.124 2.78.008.683.132-.009.236-1.537.232-1.528-.004-2.087-.112-1.243-.24zm13.34 0c.844-.128 2.095-.124 2.778.008.684.132-.008.236-1.536.232-1.528-.004-2.087-.112-1.243-.24zm-25.819-.537c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm39.462 0c.402-.16.881-.14 1.066.044.184.185-.144.316-.73.292-.647-.027-.779-.158-.336-.336zm-56.587-.878c0-.488-.562-.996-1.25-1.129l-1.25-.24 1.267-.076c1.222-.073 2.293 1.273 1.58 1.986-.19.19-.346-.053-.346-.541zm10.977.334c.383-.154 1.008-.154 1.39 0 .382.154.07.28-.695.28-.764 0-1.077-.126-.695-.28zm51.133 0c.383-.154 1.008-.154 1.39 0 .382.154.07.28-.695.28-.764 0-1.077-.126-.695-.28zm-39.173-4.463c.541-.141 1.292-.132 1.668.02.376.152-.066.268-.983.256-.917-.01-1.225-.135-.685-.276zm-7.479-.55c.402-.161.88-.142 1.066.043.184.185-.144.316-.73.292-.647-.027-.78-.158-.336-.336zm73.4-7.82c-.692-.88-.672-.9.21-.209.925.726 1.22 1.183.762 1.183-.115 0-.553-.438-.973-.973zm-66.73-2.185c.402-.16.88-.14 1.066.044.184.184-.144.316-.73.292-.647-.027-.78-.159-.336-.336zM33.5 15.543c0-1.681.104-2.37.232-1.529.127.841.127 2.217 0 3.057-.128.841-.232.153-.232-1.528z",
                        fill: "#25576d"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M68.902 117.776c-11.356-.486-21.427-1.663-31.062-3.63-15.387-3.14-23.682-7.005-26.2-12.206-1.106-2.284-1.134-3.11-.979-28.673.153-25.181.208-26.401 1.272-28.17 1.523-2.535 6.488-5.728 11.89-7.647l4.506-1.6.008-13.35c.005-7.44.242-13.718.536-14.182.435-.69 2.217-.834 10.294-.834 11.1 0 11.029-.028 10.667 4.305-.508 6.064-5.426 10.717-12.39 11.72l-4.112.592v5.17c0 2.843.097 5.17.216 5.17.12 0 2.591-.49 5.493-1.086 7.124-1.466 24.685-3.361 31.144-3.361 2.886 0 6.03-.156 6.985-.348l1.737-.347V16.585c0-16.228-.96-14.937 11.116-14.937 8.207 0 8.98.087 10.026 1.133.907.907 1.059 1.543.763 3.196-1.27 7.09-5.806 11.259-13.195 12.128l-3.152.37V29.3l1.737.348c.955.19 4.144.35 7.086.352 6.475.006 22.633 1.748 30.638 3.304 3.21.624 5.899 1.135 5.975 1.136.076 0 .139-5.733.139-12.742 0-10.844.13-12.874.873-13.617 1.293-1.293 18.637-1.293 19.93 0 1.847 1.847.558 7.352-2.596 11.088-1.98 2.344-5.776 4.094-9.793 4.514l-3.412.357v11.81l4.506 1.6c5.401 1.92 10.367 5.113 11.89 7.647 1.063 1.77 1.118 2.99 1.271 28.17.155 25.563.127 26.39-.979 28.673-3.134 6.476-16.276 11.324-38.643 14.258-6.668.875-31.524 2.393-33.904 2.07-.305-.04-4.932-.262-10.282-.49zm10.004-9.415c0-3.705.185-4.631 1.112-5.558.611-.611 1.361-1.111 1.667-1.111s1.056.5 1.667 1.111c.927.927 1.112 1.853 1.112 5.558v4.447H95.58l-.012-8.476c-.01-7.322-.167-8.817-1.145-10.977-1.52-3.359-3.562-5.434-6.902-7.013-7.044-3.33-15.304-.21-18.574 7.013-.978 2.16-1.134 3.655-1.145 10.977l-.012 8.476h11.116zm1.112-13.339c-.612-.611-1.112-1.361-1.112-1.667 0-.72 2.058-2.779 2.779-2.779.306 0 1.056.5 1.667 1.112s1.112 1.361 1.112 1.667c0 .306-.5 1.056-1.112 1.667s-1.361 1.112-1.667 1.112-1.056-.5-1.667-1.112zm-17.786 11.473v-5.756l-5.697-.544c-3.134-.3-5.885-.446-6.114-.325-.23.121-.417 2.685-.417 5.698v5.477l4.307.367c2.37.201 4.558.453 4.864.56.305.105 1.118.212 1.806.236 1.22.043 1.25-.1 1.25-5.713zm47.382 4.881 3.751-.365v-5.46c0-3.004-.187-5.56-.417-5.68-.229-.122-2.98.024-6.113.324l-5.697.544v11.639l2.362-.318c1.299-.175 4.05-.482 6.114-.684zm-64.612-6.866v-5.519l-3.196-.626c-10.428-2.042-20.003-4.944-23.9-7.242L16.1 90.057v4.88c0 4.605.086 4.96 1.529 6.312 2.9 2.717 9.41 5.225 19.314 7.44 8.727 1.953 8.059 2.3 8.059-4.179zm81.296 4.169c8.007-1.732 15.44-4.428 18.38-6.667l2.313-1.763.32-10.216-1.895 1.117c-3.978 2.347-13.491 5.229-23.853 7.225l-3.196.616v5.519c0 4.562.146 5.518.843 5.518.464 0 3.653-.607 7.087-1.35zM63.57 92.596c.557-1.64 1.884-4.079 2.947-5.42 1.915-2.412 1.922-2.438.63-2.59-5.237-.618-16.697-1.498-16.898-1.297-.135.135-.246 2.68-.246 5.654v5.407l5.14.534c2.828.294 5.653.57 6.277.614.901.063 1.345-.536 2.15-2.902zm46.043 2.086 3.751-.37v-5.388c0-2.964-.11-5.5-.246-5.635-.201-.201-11.66.678-16.898 1.297-1.292.152-1.285.178.63 2.59 1.063 1.34 2.398 3.804 2.966 5.473l1.032 3.036 2.506-.317c1.379-.174 4.195-.483 6.259-.686zm-64.612-6.846v-5.519l-3.196-.623c-10.894-2.124-19.384-4.644-23.364-6.936l-2.383-1.371.16 5.094.16 5.094 2.312 1.763c2.939 2.238 10.02 4.806 18.076 6.555 9.084 1.971 8.235 2.39 8.235-4.057zm79.815 4.395c10.346-2.129 17.327-4.65 20.646-7.453 1.773-1.5 1.806-1.611 1.806-6.202 0-2.571-.133-4.675-.296-4.675s-1.48.6-2.927 1.333c-3.56 1.804-12.482 4.492-19.486 5.87-3.166.624-5.855 1.134-5.975 1.134-.12 0-.218 2.501-.218 5.558s.223 5.558.495 5.558 2.952-.505 5.955-1.123zM78.906 73.96c0-4.501-.16-5.56-.88-5.836-.483-.186-3.797-.352-7.364-.37-3.567-.018-9.486-.357-13.155-.754-3.668-.397-6.857-.618-7.086-.49-.23.127-.417 2.686-.417 5.686v5.456l7.086.63c3.898.347 7.962.713 9.032.815 1.07.1 4.384.223 7.364.272l5.42.09zm28.207 4.3 6.252-.632v-5.444c0-2.994-.187-5.558-.417-5.698-.229-.14-3.543.083-7.364.496-3.82.413-10.074.826-13.895.917l-6.947.165-.16 5.785-.16 5.784 8.22-.371c4.52-.204 11.031-.655 14.47-1.003zm-62.23-7.255-.159-5.674-4.168-.648c-2.293-.356-6.63-1.304-9.64-2.107-4.618-1.233-7.055-2.125-14.121-5.17-.525-.225-.695.86-.695 4.436 0 4.623.041 4.769 1.742 6.2 3.37 2.836 9.327 5.112 19.1 7.299 8.797 1.967 8.127 2.333 7.94-4.336zm81.415 4.312c9.93-2.166 15.799-4.388 19.238-7.282 1.688-1.42 1.734-1.582 1.734-6.134 0-2.571-.135-4.675-.3-4.675s-1.353.538-2.64 1.194c-3.537 1.805-11.064 4.112-18.636 5.71-3.733.788-6.909 1.433-7.057 1.433-.148 0-.269 2.501-.269 5.558 0 4.598.146 5.558.844 5.558.463 0 3.652-.613 7.086-1.362zM99.923 62.2c14.522-1.04 29.554-3.637 28.734-4.963-.357-.577-5.131-2.022-9.286-2.81-17.128-3.248-50.932-3.616-70.722-.771-6.15.884-14.207 2.906-14.207 3.565 0 1.545 12.624 3.708 30.291 5.19 5.422.456 27.762.321 35.19-.21zm-70.371-7.49c1.377-1.75 4.29-3.24 8.088-4.133 1.606-.378 3.038-.88 3.184-1.114.145-.236-2.294-2.221-5.421-4.413-4.321-3.028-5.99-3.909-6.958-3.669-5.668 1.406-11.918 5.15-12.235 7.33-.227 1.557 3.028 4.197 7.363 5.972 4.246 1.738 4.631 1.74 5.979.027zm110.1 0c4.439-1.778 7.738-4.414 7.507-6-.318-2.179-6.545-5.91-12.235-7.331-.966-.241-2.569.593-6.643 3.458-2.953 2.076-5.373 4.025-5.378 4.33-.005.306 1.417.959 3.16 1.45 4.147 1.17 6.474 2.407 7.702 4.093 1.251 1.72 1.59 1.72 5.887 0zM59.73 47.187c4.585-.36 8.42-.729 8.521-.82.133-.117-4.861-7.915-6.83-10.664-.392-.548-24.773 3.094-24.739 3.696.01.176 2.005 1.695 4.433 3.377s5.227 3.632 6.22 4.336c1.048.742 2.28 1.164 2.932 1.005.62-.151 4.877-.57 9.463-.93zm57.752-.996a492.261 492.261 0 0 1 6.165-4.57l3.335-2.426-5.28-.99c-4.814-.903-19.58-2.764-19.767-2.492-3.017 4.38-6.955 10.533-6.819 10.655.102.09 3.934.462 8.515.826 4.581.364 8.437.77 8.569.9.728.73 2.783-.011 5.282-1.903zm-25.311-5.25c1.874-2.842 3.408-5.344 3.408-5.558s-6.253-.389-13.895-.389c-7.642 0-13.895.175-13.895.39s1.534 2.715 3.408 5.557l3.408 5.169h14.157zM41.715 16.34c3.569-3.396 3.427-3.577-2.808-3.577h-5.578v5.692l3.336-.242c2.746-.198 3.638-.53 5.05-1.873zm99.264 1.388c1.726-.654 3.88-2.487 4.692-3.992.483-.897.088-.973-5.053-.973h-5.578v5.558h2.187c1.203 0 2.891-.267 3.752-.593zm-50.2-5.731c1.738-.726 4.244-3.272 4.244-4.311 0-.264-2.376-.48-5.28-.48h-5.28v5.557h2.24c1.233 0 3.067-.345 4.076-.766z",
                fill: "#4d4d4d"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArena);


/***/ })

};
;