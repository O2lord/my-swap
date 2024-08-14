"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,660];
exports.modules = {

/***/ 1420:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3185);
/* harmony import */ var next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5244);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7182);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2940);
/* harmony import */ var next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4178);
/* harmony import */ var private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2603);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__]);
([private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__, private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-ignore this need to be imported from next/dist to be external



// Import the app and document modules.
// @ts-expect-error - replaced by webpack/turbopack loader

// @ts-expect-error - replaced by webpack/turbopack loader

// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

const PagesRouteModule = next_dist_server_future_route_modules_pages_module__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule;
// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "default"));
// Re-export methods.
const getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticProps");
const getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getStaticPaths");
const getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "getServerSideProps");
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "config");
const reportWebVitals = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "reportWebVitals");
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticProps");
const unstable_getStaticPaths = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticPaths");
const unstable_getStaticParams = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getStaticParams");
const unstable_getServerProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerProps");
const unstable_getServerSideProps = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__, "unstable_getServerSideProps");
// Create and export the route module that will be consumed.
const routeModule = new PagesRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES,
        page: "/index",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    components: {
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (next_dist_pages_document__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_index_tsx__WEBPACK_IMPORTED_MODULE_5__
});

//# sourceMappingURL=pages.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var react_identicons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1363);
/* harmony import */ var react_identicons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_identicons__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__]);
_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Balance = ({ balance })=>{
    const { publicKey } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-white shadow-sm rounded-lg p-3 w-full flex items-center justify-start space-x-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "rounded-full shadow-sm overflow-hidden inline-block",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_identicons__WEBPACK_IMPORTED_MODULE_2___default()), {
                    string: publicKey?.toString() || "",
                    size: 40
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-lg font-semibold text-gray-700",
                        children: "Current Balance"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        className: "text-gray-600 text-md",
                        children: [
                            balance,
                            " Blax"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Balance);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6286:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1247);
/* harmony import */ var _services_tokenMint_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9908);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_blockchain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(786);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3590);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3291);
/* harmony import */ var _store_globalSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _services_blockchain__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, react_redux__WEBPACK_IMPORTED_MODULE_7__, _store_globalSlice__WEBPACK_IMPORTED_MODULE_8__]);
([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _services_blockchain__WEBPACK_IMPORTED_MODULE_5__, react_toastify__WEBPACK_IMPORTED_MODULE_6__, react_redux__WEBPACK_IMPORTED_MODULE_7__, _store_globalSlice__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BuyTokens = ()=>{
    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useConnection)();
    const { publicKey, sendTransaction } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { setSalesHistory, setBalance } = _store_globalSlice__WEBPACK_IMPORTED_MODULE_8__.globalActions;
    const salesCost = 0.0007;
    const TOKEN_OWNER = process.env.NEXT_PUBLIC_TOKEN_OWNER_KEY_PAIR || "";
    const TOKEN_MINT_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.PublicKey(_services_tokenMint_json__WEBPACK_IMPORTED_MODULE_2__/* .address */ .L) || "";
    const ownerArray = Uint8Array.from(TOKEN_OWNER.split(",").map(Number));
    const OWNER = _solana_web3_js__WEBPACK_IMPORTED_MODULE_4__.Keypair.fromSecretKey(ownerArray);
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (!connection || !publicKey) return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(`Please install or connect your wallet`);
        if (!TOKEN_MINT_ADDRESS) return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(`Please provide a TOKEN MINT ADDRESS`);
        if (!TOKEN_OWNER) return react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.warning(`Please provide a TOKEN OWNER KEYPAIR`);
        const tx = await (0,_services_blockchain__WEBPACK_IMPORTED_MODULE_5__/* .buyToken */ .Q1)(connection, TOKEN_MINT_ADDRESS, OWNER, publicKey, Number(amount), salesCost);
        await react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast.promise(new Promise(async (resolve, reject)=>{
            try {
                const signature = await sendTransaction(tx, connection, {
                    signers: [
                        OWNER
                    ]
                });
                setAmount("");
                await connection.confirmTransaction(signature, "finalized");
                console.log(`Transaction signature: ${signature}`);
                const history = await (0,_services_blockchain__WEBPACK_IMPORTED_MODULE_5__/* .fetchSalesHistory */ .MT)(connection, OWNER.publicKey);
                dispatch(setSalesHistory(history));
                const balance = await (0,_services_blockchain__WEBPACK_IMPORTED_MODULE_5__/* .getTokenBalance */ .yX)(connection, TOKEN_MINT_ADDRESS, publicKey);
                dispatch(setBalance(balance));
                resolve(signature);
            } catch (error) {
                console.error("Transaction failed:", error);
                reject(error);
            }
        }), {
            pending: "Approve transaction...",
            success: "Transaction successful \uD83D\uDC4C",
            error: "Encountered error \uD83E\uDD2F"
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "number",
                value: amount,
                min: "1",
                placeholder: `E.g. 1 Blax token, (${salesCost} SOL per token)`,
                required: true,
                onChange: (e)=>setAmount(e.target.value),
                className: "mt-1 block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm mb-4 "
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "submit",
                disabled: !amount || amount === "0" || !publicKey || publicKey.toString() === OWNER.publicKey.toString(),
                className: "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-orange-300",
                children: "Buy Tokens"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BuyTokens);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8847);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__]);
_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Header = ()=>{
    const [isMounted, setIsMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setIsMounted(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "p-4 bg-gray-800 mb-4",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "flex justify-between items-center max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "text-white",
                    children: "Blax Coin"
                }),
                isMounted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_1__.WalletMultiButton, {
                    style: {
                        backgroundColor: "#F97316",
                        color: "white"
                    }
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_MintHistory)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "react-icons/fa"
const fa_namespaceObject = require("react-icons/fa");
;// CONCATENATED MODULE: ./components/MintHistory.tsx



const formatReceiver = (receiver)=>{
    return `${receiver.substring(0, 4)}...${receiver.substring(receiver.length - 4)}`;
};
const MintHistory = ({ mintHistory })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                className: "text-lg font-bold text-gray-700",
                children: "Recently Purchased"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("ul", {
                className: "mt-2 text-gray-500",
                children: mintHistory.map((minter, i)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                        className: "mb-2 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: minter.addressLink,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "font-bold hover:text-orange-500",
                                        children: formatReceiver(minter.receiver.toString())
                                    }),
                                    " ",
                                    "- ",
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        children: [
                                            minter.amount,
                                            " Blax Token"
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                href: minter.transactionLink,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: " hover:text-orange-500",
                                children: /*#__PURE__*/ jsx_runtime.jsx(fa_namespaceObject.FaExternalLinkAlt, {
                                    size: 12
                                })
                            })
                        ]
                    }, i))
            })
        ]
    });
};
/* harmony default export */ const components_MintHistory = (MintHistory);


/***/ }),

/***/ 2603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_Balance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(464);
/* harmony import */ var _components_BuyTokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6286);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9852);
/* harmony import */ var _components_MintHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9473);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_tokenMint_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9908);
/* harmony import */ var _services_blockchain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(786);
/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1247);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4275);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3291);
/* harmony import */ var _store_globalSlice__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Balance__WEBPACK_IMPORTED_MODULE_1__, _components_BuyTokens__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_3__, _services_blockchain__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__, react_redux__WEBPACK_IMPORTED_MODULE_12__, _store_globalSlice__WEBPACK_IMPORTED_MODULE_13__]);
([_components_Balance__WEBPACK_IMPORTED_MODULE_1__, _components_BuyTokens__WEBPACK_IMPORTED_MODULE_2__, _components_Header__WEBPACK_IMPORTED_MODULE_3__, _services_blockchain__WEBPACK_IMPORTED_MODULE_8__, _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__, react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__, react_redux__WEBPACK_IMPORTED_MODULE_12__, _store_globalSlice__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function Home() {
    const { connection } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useConnection)();
    const { publicKey } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_9__.useWallet)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useDispatch)();
    const { setSalesHistory, setBalance } = _store_globalSlice__WEBPACK_IMPORTED_MODULE_13__.globalActions;
    const TOKEN_MINT_ADDRESS = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_10__.PublicKey(_services_tokenMint_json__WEBPACK_IMPORTED_MODULE_7__/* .address */ .L) || "";
    const TOKEN_OWNER = process.env.NEXT_PUBLIC_TOKEN_OWNER_KEY_PAIR || "";
    const ownerArray = Uint8Array.from(TOKEN_OWNER.split(",").map(Number));
    const OWNER = _solana_web3_js__WEBPACK_IMPORTED_MODULE_10__.Keypair.fromSecretKey(ownerArray);
    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    const { salesHistory, balance } = (0,react_redux__WEBPACK_IMPORTED_MODULE_12__.useSelector)((states)=>states.globalStates);
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        fetchData();
    }, [
        dispatch,
        setBalance,
        publicKey
    ]);
    const fetchData = async ()=>{
        const history = await (0,_services_blockchain__WEBPACK_IMPORTED_MODULE_8__/* .fetchSalesHistory */ .MT)(connection, OWNER.publicKey);
        dispatch(setSalesHistory(history));
        if (publicKey) {
            const balance = await (0,_services_blockchain__WEBPACK_IMPORTED_MODULE_8__/* .getTokenBalance */ .yX)(connection, TOKEN_MINT_ADDRESS, publicKey);
            dispatch(setBalance(balance));
        }
        setIsLoading(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Grim Reap6r"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "h-screen bg-gray-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-[100px]"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                        className: "max-w-lg mx-auto p-4 space-y-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_BuyTokens__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                height: 70,
                                className: "mb-2"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Balance__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                balance: balance
                            }),
                            isLoading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loading_skeleton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                                count: 5
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_MintHistory__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                mintHistory: salesHistory
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 786:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MT: () => (/* binding */ fetchSalesHistory),
/* harmony export */   Q1: () => (/* binding */ buyToken),
/* harmony export */   yX: () => (/* binding */ getTokenBalance)
/* harmony export */ });
/* harmony import */ var bs58__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9146);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_solana_web3_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1057);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([bs58__WEBPACK_IMPORTED_MODULE_0__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__]);
([bs58__WEBPACK_IMPORTED_MODULE_0__, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const buyToken = async (connection, mintPubKey, OWNER, recipientPubKey, amount, salesCost)=>{
    const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.Transaction();
    transaction.feePayer = recipientPubKey;
    const receiverAta = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.getAssociatedTokenAddress)(mintPubKey, recipientPubKey, false, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.TOKEN_PROGRAM_ID, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.ASSOCIATED_TOKEN_PROGRAM_ID);
    const senderAta = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.getAssociatedTokenAddress)(mintPubKey, OWNER.publicKey, false, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.TOKEN_PROGRAM_ID, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.ASSOCIATED_TOKEN_PROGRAM_ID);
    transaction.add(solanaTransferInstruction(recipientPubKey, OWNER.publicKey, amount, salesCost));
    const accountInfo = await connection.getAccountInfo(receiverAta);
    if (!accountInfo) {
        console.log(`Will include fee for creating ${receiverAta.toBase58()} ATA`);
        transaction.add(createAtaInstruction(recipientPubKey, receiverAta, mintPubKey));
    }
    transaction.add(tokenTransferInstruction(senderAta, receiverAta, OWNER.publicKey, amount));
    return transaction;
};
const tokenTransferInstruction = (senderATA, receiverATA, ownerPubKey, amount)=>{
    const instruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.createTransferInstruction)(senderATA, receiverATA, ownerPubKey, amount * Math.pow(10, 2), [], _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.TOKEN_PROGRAM_ID);
    return instruction;
};
const createAtaInstruction = (payer, ata, mintPubKey)=>{
    const instruction = (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.createAssociatedTokenAccountInstruction)(payer, ata, payer, mintPubKey);
    return instruction;
};
const solanaTransferInstruction = (fromPubkey, toPubkey, amount, salesCost)=>{
    const instruction = _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.SystemProgram.transfer({
        fromPubkey,
        toPubkey,
        lamports: parseInt((salesCost * amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_1__.LAMPORTS_PER_SOL).toString())
    });
    return instruction;
};
const getTokenBalance = async (connection, mintPubKey, recipientPubKey)=>{
    const ata = await (0,_solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.getAssociatedTokenAddress)(mintPubKey, recipientPubKey, false, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.TOKEN_PROGRAM_ID, _solana_spl_token__WEBPACK_IMPORTED_MODULE_2__.ASSOCIATED_TOKEN_PROGRAM_ID);
    const accountInfo = await connection.getAccountInfo(ata);
    if (!accountInfo) return 0;
    const tokenAccountBalance = await connection.getTokenAccountBalance(ata);
    return tokenAccountBalance.value.uiAmount || 0;
};
const fetchSalesHistory = async (connection, address)=>{
    const signatures = await connection.getSignaturesForAddress(address, {
        limit: 5
    });
    const cluster = connection.rpcEndpoint.includes("devnet") ? "devnet" : connection.rpcEndpoint.includes("testnet") ? "testnet" : "mainnet";
    const transactions = await Promise.all(signatures.map(async (sig)=>await connection.getTransaction(sig.signature, {
            commitment: "finalized",
            maxSupportedTransactionVersion: 0
        })));
    const salesDetails = transactions.map((tx)=>{
        const message = tx?.transaction.message;
        const signatures = tx?.transaction.signatures || [];
        const instructions = message.instructions;
        const accounts = message.accountKeys;
        const relevantInstruction = instructions.find((instr)=>accounts[instr.programIdIndex].toString() === "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA" && [
                "transfer"
            ].includes(decodeInstructionType(instr.data)));
        if (relevantInstruction && signatures.length > 0) {
            const receiverIndex = relevantInstruction.accounts[1] // Assuming the receiver is the second account in the accounts array
            ;
            const receiver = accounts[receiverIndex].toString();
            const amount = decodeAmount(relevantInstruction.data);
            const transactionLink = `https://explorer.solana.com/tx/${signatures[0]}?cluster=${cluster}`;
            const addressLink = `https://explorer.solana.com/address/${receiver}?cluster=${cluster}`;
            return {
                receiver,
                amount: amount / 100,
                signature: signatures[0],
                transactionLink,
                addressLink
            };
        }
        return null;
    }).filter((details)=>details !== null);
    return salesDetails;
};
function decodeInstructionType(data) {
    const decodedData = bs58__WEBPACK_IMPORTED_MODULE_0__["default"].decode(data);
    const instructionTypeCode = decodedData[0];
    switch(instructionTypeCode){
        case 3:
            return "transfer";
        case 7:
            return "mintTo";
        default:
            return "unknown";
    }
}
function decodeAmount(data) {
    const decodedData = bs58__WEBPACK_IMPORTED_MODULE_0__["default"].decode(data);
    const amount = new DataView(decodedData.buffer, decodedData.byteOffset, decodedData.byteLength).getUint32(1, true);
    return amount;
}


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7831:
/***/ ((module) => {

module.exports = require("@solana/web3.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1363:
/***/ ((module) => {

module.exports = require("react-identicons");

/***/ }),

/***/ 3258:
/***/ ((module) => {

module.exports = import("@reduxjs/toolkit");;

/***/ }),

/***/ 1057:
/***/ ((module) => {

module.exports = import("@solana/spl-token");;

/***/ }),

/***/ 3364:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-base");;

/***/ }),

/***/ 1247:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ 8847:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ }),

/***/ 7280:
/***/ ((module) => {

module.exports = import("@solana/wallet-adapter-wallets");;

/***/ }),

/***/ 9146:
/***/ ((module) => {

module.exports = import("bs58");;

/***/ }),

/***/ 4275:
/***/ ((module) => {

module.exports = import("react-loading-skeleton");;

/***/ }),

/***/ 3291:
/***/ ((module) => {

module.exports = import("react-redux");;

/***/ }),

/***/ 3590:
/***/ ((module) => {

module.exports = import("react-toastify");;

/***/ }),

/***/ 9908:
/***/ ((module) => {

module.exports = JSON.parse('{"L":"E9r4Nxg5zBaefmaTzKYTVCem3YDsCXKKvyrZuQEZyKp8"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,756,664,178], () => (__webpack_exec__(1420)));
module.exports = __webpack_exports__;

})();