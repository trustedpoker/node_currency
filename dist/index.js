import { createContext as L, useContext as ee, memo as h, useState as E, useEffect as X, useCallback as le, useMemo as z, useRef as tn, Fragment as mt } from "react";
import { IC_HOST as Ne, IsDev as Y, queryKeyFactory as se, matchRustEnum as R, BigIntToString as wt, BigIntToBig as nn, BigToBigInt as an, UserError as v, useQuery as Z, useToast as qe, useMutation as Q, WalletTypeNotInstalledError as $n, usePersistentState as de, ListItem as k, Image as rn, LoadingAnimationComponent as Ee, List as F, ErrorComponent as ce, FormComponent as e2, Interactable as gt, Modal as bt, TitleTextComponent as t2, DateToBigIntTimestamp as cn, useIsInList as n2, NumberInputComponent as on, ModalTitlePortal as He, TextInputComponent as xt, SwitchInputComponent as sn, DropdownInputComponent as Oe, CopiableTextComponent as Qe, LoadingSpinnerComponent as ln, QRCodeComponent as a2, Label as r2, TabsComponent as dn, ModalFooterPortal as Ze, ButtonComponent as q, useIsMobile as An, FauxLoadingBarAnimationComponent as c2, useConfirmModal as i2, DropdownComponent as o2, ModalBackButtonPortal as s2 } from "@zk-game-dao/ui";
import { AuthAdapter as l2 } from "@web3auth/auth-adapter";
import { WEB3AUTH_NETWORK as Rt, CHAIN_NAMESPACES as d2, WALLET_ADAPTERS as Jt } from "@web3auth/base";
import { CommonPrivateKeyProvider as A2 } from "@web3auth/base-provider";
import { Web3AuthNoModal as p2 } from "@web3auth/no-modal";
import { jsx as a, Fragment as x, jsxs as w } from "react/jsx-runtime";
import { useSiwbIdentity as Te, SiwbIdentityProvider as u2 } from "ic-siwb-lasereyes-connector";
import { useLaserEyes as Pe, OylLogo as f2, MagicEdenLogo as m2, LeatherLogo as w2, OkxLogo as g2, XverseLogo as y2, WizzLogo as h2, UnisatLogo as v2, LaserEyesProvider as C2 } from "@omnisat/lasereyes";
import { OYL as pn, MAGIC_EDEN as un, LEATHER as fn, OKX as mn, XVERSE as wn, WIZZ as gn, UNISAT as yn, MAINNET as T2 } from "@omnisat/lasereyes-core";
import { HttpAgent as he, Actor as B2 } from "@dfinity/agent";
import { CkETHMinterCanister as b2 } from "@dfinity/cketh";
import { AccountIdentifier as re, LedgerCanister as zt, SubAccount as x2 } from "@dfinity/ledger-icp";
import { IcrcLedgerCanister as ie, mapTokenMetadata as kt } from "@dfinity/ledger-icrc";
import { Principal as M } from "@dfinity/principal";
import { ethers as ae } from "ethers";
import { Buffer as z2 } from "buffer";
import { AuthClient as k2 } from "@dfinity/auth-client";
import { Ed25519KeyIdentity as O2 } from "@dfinity/identity";
import { addMinutes as yt, format as N2 } from "date-fns";
import ye from "big.js";
import { formatInTimeZone as E2 } from "date-fns-tz";
import P2 from "axios";
import _ from "classnames";
import { animate as M2, AnimatePresence as hn } from "framer-motion";
import { CkBTCMinterCanister as S2 } from "@dfinity/ckbtc";
import G2 from "@mempool/mempool.js";
import { useQuery as Ve } from "@tanstack/react-query";
const vn = L({
  login: async () => {
  },
  loginFactory: () => async () => {
  },
  logout: async () => {
  },
  requireLogin: async () => {
    throw new Error("Require login not implemented");
  }
}), W = () => ee(vn), je = import.meta.env.VITE_IC_HOST ?? void 0 ?? Ne, R2 = Y ? `http://${import.meta.env.CANISTER_ID_INTERNET_IDENTITY}.localhost:4943/` : "https://identity.ic0.app", Wt = Y ? "BK_fxc0tSnRyrjvB-vyy4LIA8wuFjHXXKjLKt5c9ZjtoZbU_5123z2vtbKQ037vfcp3189Hc6yH7HG6sYPaxJ0Q" : "BLNGdSp4e8zpui5g2VRVm9533eUVL7XughrH0PDTsOU0n3h3163HXJxstQpTHvSqaRvFMKOimvaV6cLWEnGlr88", J2 = Ne, W2 = Y ? Rt.SAPPHIRE_DEVNET : Rt.SAPPHIRE_MAINNET, ht = [
  "google",
  "line",
  "twitter",
  "internet_identity",
  "apple",
  "facebook",
  "github"
], Y2 = (e) => {
  const t = new A2({
    config: {
      chainConfig: {
        chainNamespace: d2.OTHER,
        // ICP uses "other" namespace
        chainId: "InternetComputer",
        // ICP chain identifier
        rpcTarget: J2,
        // ICP's public API endpoint
        displayName: "Internet Computer",
        blockExplorerUrl: "https://dashboard.internetcomputer.org",
        ticker: "ICP",
        tickerName: "Internet Computer Protocol"
      }
    }
  }), n = new p2({
    clientId: Wt,
    web3AuthNetwork: W2,
    privateKeyProvider: t
    // Attach privateKeyProvider here
  }), r = new l2({
    clientId: Wt
    // adapterSettings: {
    //   loginConfig: {
    //     // weibo: {
    //     //   verifier: "zkp-weibo-verifier",
    //     //   typeOfLogin: "jwt",
    //     //   clientId: "Ev39Il2sj0qi9If0txP4FyS3nk5s7aSd",
    //     // },
    //   },
    // },
  });
  return n.configureAdapter(r), n;
}, ge = Y2(), Cn = ({ IDL: e }) => {
  const t = e.Variant({
    IncludeUriInSeed: e.Null,
    DisableEthToPrincipalMapping: e.Null,
    DisablePrincipalToEthMapping: e.Null
  });
  e.Record({
    uri: e.Text,
    runtime_features: e.Opt(e.Vec(t)),
    domain: e.Text,
    statement: e.Opt(e.Text),
    scheme: e.Opt(e.Text),
    salt: e.Text,
    network: e.Opt(e.Text),
    session_expires_in: e.Opt(e.Nat64),
    targets: e.Opt(e.Vec(e.Text)),
    sign_in_expires_in: e.Opt(e.Nat64)
  });
  const n = e.Vec(e.Nat8), r = e.Text, c = e.Text, i = e.Variant({ Ok: c, Err: e.Text }), l = e.Variant({
    Ok: n,
    Err: e.Text
  }), o = e.Vec(e.Nat8), A = o, s = e.Nat64, d = e.Record({
    pubkey: o,
    targets: e.Opt(e.Vec(e.Principal)),
    expiration: s
  }), f = e.Record({
    signature: e.Vec(e.Nat8),
    delegation: d
  }), g = e.Variant({
    Ok: f,
    Err: e.Text
  }), u = e.Text, p = e.Text, m = e.Variant({
    Bip322Simple: e.Null,
    ECDSA: e.Null
  }), C = o, y = e.Record({
    user_canister_pubkey: C,
    expiration: s
  }), b = e.Variant({ Ok: y, Err: e.Text }), B = e.Text, O = e.Variant({
    Ok: B,
    Err: e.Text
  });
  return e.Service({
    get_address: e.Func(
      [n, r],
      [i],
      ["query"]
    ),
    get_caller_address: e.Func(
      [e.Opt(r)],
      [i],
      ["query"]
    ),
    get_principal: e.Func([c], [l], ["query"]),
    siwb_get_delegation: e.Func(
      [c, A, s],
      [g],
      ["query"]
    ),
    siwb_login: e.Func(
      [u, c, p, A, m],
      [b],
      []
    ),
    siwb_prepare_login: e.Func([c], [O], [])
  });
}, Yt = import.meta.env.CANISTER_ID_IC_SIWB_PROVIDER, F2 = (e, t = {}) => {
  const n = t.agent || new he({ ...t.agentOptions });
  return t.agent && t.agentOptions && console.warn(
    "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
  ), import.meta.env.DFX_NETWORK !== "ic" && n.fetchRootKey().catch((r) => {
    console.warn(
      "Unable to fetch root key. Check to ensure that your local replica is running"
    ), console.error(r);
  }), B2.createActor(Cn, {
    agent: n,
    canisterId: e,
    ...t.actorOptions
  });
};
Yt && F2(Yt);
const Tn = L(
  null
), Ke = () => ee(Tn), dr = (e) => (parseInt(e) / 1e18).toFixed(2), Ar = (e) => (e * 1e18).toString(16), H2 = h(({ children: e }) => {
  const [t, n] = E({}), [r, c] = E(null), [i, l] = E({}), [o, A] = E(""), s = () => A(""), d = (u) => A(u);
  X(() => {
    const u = localStorage.getItem("selectedWalletRdns"), p = localStorage.getItem("selectedAccountByWalletRdns");
    p && l(JSON.parse(p));
    function m(C) {
      n((y) => ({
        ...y,
        [C.detail.info.rdns]: C.detail
      })), u && C.detail.info.rdns === u && c(u);
    }
    return window.addEventListener("eip6963:announceProvider", m), window.dispatchEvent(new Event("eip6963:requestProvider")), () => window.removeEventListener("eip6963:announceProvider", m);
  }, []);
  const f = le(
    async (u) => {
      try {
        const p = t[u], m = await p.provider.request({
          method: "eth_requestAccounts"
        });
        m?.[0] && (c(p.info.rdns), l((C) => ({
          ...C,
          [p.info.rdns]: m[0]
        })), localStorage.setItem("selectedWalletRdns", p.info.rdns), localStorage.setItem(
          "selectedAccountByWalletRdns",
          JSON.stringify({
            ...i,
            [p.info.rdns]: m[0]
          })
        ));
      } catch (p) {
        console.error("Failed to connect to provider:", p);
        const m = p;
        d(
          `Code: ${m.code} 
Error Message: ${m.message}`
        );
      }
    },
    [t, i]
  ), g = le(async () => {
    if (r) {
      l((p) => ({
        ...p,
        [r]: null
      }));
      const u = t[r];
      c(null), localStorage.removeItem("selectedWalletRdns");
      try {
        await u.provider.request({
          method: "wallet_revokePermissions",
          params: [{ eth_accounts: {} }]
        });
      } catch (p) {
        console.error("Failed to revoke permissions:", p);
      }
    }
  }, [r, t]);
  return /* @__PURE__ */ a(
    Tn.Provider,
    {
      value: {
        wallets: t,
        selectedWallet: r === null ? null : t[r],
        selectedAccount: r === null ? null : i[r],
        errorMessage: o,
        connectWallet: f,
        disconnectWallet: g,
        clearError: s
      },
      children: e
    }
  );
}), S = {
  auth: se(
    ({
      siwb: e,
      laserEyes: t,
      internetIdentityProvider: n
    }) => [
      "auth",
      e?.identity?.getPrincipal() ?? "unknown",
      t?.address,
      t?.provider,
      n?.getIdentity().getPrincipal().toText() ?? "unknown"
    ]
  ),
  _balanceModalBalance: se((e) => [
    "balance-modal-balance",
    e
  ]),
  chain_fusion_transaction_fees: se((e) => [
    "chain-fusion-transaction-fees",
    e.toString()
  ]),
  walletBalance: se(
    (e, t) => [
      "wallet-balance",
      e,
      t?.accountIdentifier?.toHex() ?? "unknown"
    ]
  ),
  icrc_allowance: se((e) => [
    "icrc-allowance",
    e
  ]),
  allowance: se(
    (e, t, n) => [
      "allowance",
      e ?? "-",
      t ? JSON.stringify(t) : "-",
      n?.toText() ?? "-"
    ]
  ),
  transactionFee: se((e) => [
    "transaction-fee",
    e
  ])
};
function Ft(e) {
  const t = new Uint8Array(8);
  for (let n = 0; n < e.length && n < 8; n++)
    t[n] = e.charCodeAt(n);
  return t;
}
function Ot(e) {
  Array.isArray(e) && (e = new Uint8Array(e));
  let t = e.indexOf(0);
  return t === -1 && (t = e.length), new TextDecoder().decode(e.slice(0, t));
}
const V2 = (e) => R(e)({
  ETH: () => "ETH",
  USDC: () => "USDC",
  USDT: () => "USDT"
}), ve = (e) => R(e)({
  GenericICRC1: (t) => {
    const n = `${Ot(t.symbol)}`;
    return n.startsWith("ck") ? n.slice(2) : n;
  },
  CKETHToken: (t) => V2(t),
  BTC: () => "BTC",
  ICP: () => "ICP"
}), pe = (e) => R(e)({
  Fake: () => "In game",
  Real: (t) => ve(t)
}), j2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3csvg%20width='144'%20height='145'%20viewBox='0%200%20144%20145'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20style='enable-background:new%200%200%20144%20145;'%20xml:space='preserve'%3e%3cmask%20id='btc-mask'%3e%3c!--%20Circle%20--%3e%3cpath%20fill='white'%20d='M141.846%2089.665C132.225%20128.236%2093.1561%20151.711%2054.5761%20142.093C16.0121%20132.476%20-7.46593%2093.408%202.15707%2054.839C11.7711%2016.264%2050.8431%20-7.21401%2089.4101%202.40299C127.985%2012.02%20151.462%2051.091%20141.846%2089.665Z'%20/%3e%3c!--%20BTC%20Symbol%20--%3e%3cpath%20fill='black'%20d='M103.736%2061.991C105.169%2052.409%2097.873%2047.26%2087.898%2043.824L91.133%2030.846L83.234%2028.877L80.083%2041.513C78.004%2040.995%2075.873%2040.507%2073.752%2040.024L76.923%2027.304L69.029%2025.335L65.79%2038.311C64.071%2037.919%2062.384%2037.533%2060.745%2037.125L60.753%2037.085L49.859%2034.365L47.757%2042.802C47.757%2042.802%2053.618%2044.145%2053.494%2044.229C56.694%2045.028%2057.271%2047.145%2057.175%2048.823L53.49%2063.608C53.71%2063.665%2053.995%2063.744%2054.311%2063.872C54.047%2063.806%2053.766%2063.735%2053.477%2063.665L48.311%2084.375C47.919%2085.347%2046.926%2086.806%2044.69%2086.252C44.769%2086.366%2038.945%2084.819%2038.945%2084.819L35.025%2093.86L45.305%2096.423C47.216%2096.902%2049.093%2097.402%2050.937%2097.876L47.67%20111.003L55.561%20112.972L58.798%2099.985C60.956%20100.569%2063.048%20101.11%2065.096%20101.619L61.87%20114.545L69.77%20116.514L73.04%20103.412C86.513%20105.96%2096.644%20104.932%20100.906%2092.749C104.343%2082.939%20100.736%2077.28%2093.648%2073.589C98.809%2072.399%20102.699%2069.003%20103.736%2061.991ZM85.687%2087.302C83.243%2097.113%2066.727%2091.809%2061.369%2090.478L65.707%2073.089C71.062%2074.424%2088.237%2077.07%2085.687%2087.302ZM88.127%2061.85C85.901%2070.774%2072.152%2066.239%2067.692%2065.127L71.624%2049.355C76.083%2050.467%2090.448%2052.542%2088.127%2061.85Z'%20/%3e%3c/mask%3e%3c!--%20Circle%20with%20mask%20applied%20--%3e%3cpath%20fill='white'%20d='M141.846%2089.665C132.225%20128.236%2093.1561%20151.711%2054.5761%20142.093C16.0121%20132.476%20-7.46593%2093.408%202.15707%2054.839C11.7711%2016.264%2050.8431%20-7.21401%2089.4101%202.40299C127.985%2012.02%20151.462%2051.091%20141.846%2089.665Z'%20mask='url(%23btc-mask)'%20/%3e%3c/svg%3e", Q2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='24'%20height='24'%20viewBox='0%200%201920%201920'%20enable-background='new%200%200%201920%201920'%20xml:space='preserve'%3e%3cg%3e%3cpolygon%20fill='%238A92B2'%20points='959.8,80.7%20420.1,976.3%20959.8,731%20'/%3e%3cpolygon%20fill='%2362688F'%20points='959.8,731%20420.1,976.3%20959.8,1295.4%20'/%3e%3cpolygon%20fill='%2362688F'%20points='1499.6,976.3%20959.8,80.7%20959.8,731%20'/%3e%3cpolygon%20fill='%23454A75'%20points='959.8,1295.4%201499.6,976.3%20959.8,731%20'/%3e%3cpolygon%20fill='%238A92B2'%20points='420.1,1078.7%20959.8,1839.3%20959.8,1397.6%20'/%3e%3cpolygon%20fill='%2362688F'%20points='959.8,1397.6%20959.8,1839.3%201499.9,1078.7%20'/%3e%3c/g%3e%3c/svg%3e", Z2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAboAAAHgCAYAAADT4qgUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAoj1SURBVHgB7L0JgF1FlT986vW+pLuz7yEbIYRAgLCELYQ9MIAboCDOqDA6MuqIfx35HAVRdFAUcBsVwcEVhiiyCYKyhyRAIAkhK9nT2brTSafTSe+vvnPurVN1qt59vSSBdOI70Hl3re1Wnd/ZqgogRznKUU9Jib8U/X3jG99I8bH4y0v6u/LKK/Oy3LPp0G+QJueXoxzlqIeUGzg5ylHnpBCYUnfccceoioqKY/Ly8ipTqVRlR0dHZWFh4XD8VXitQmtdqZSqwOcr8L5Op9MKr9G94d3JBJ/djX+76F06x3Q3YXqazumYHuHf9vb26paWlo34t2H06NEb8FqarkOOcpSjRMoBXY5ylExq6tSp+c8///z/y8/Pn4mgcwxdJPCiv65e7s4ziZkiuHXnGX4O89m4e/fuuwcPHvwAnrZDDvBylKMMygFdjnKUSeqNN94Yd9RRR92HGtkk1M5S9Mc3GcToNxswZQM6er4rEOwu2NEvanxpo/ltWLJkyVUIzmsg1vBylKMcGcqDHOUoR5LUvHnzxh9zzDGzEECORHNhHv2xJmdASvrLVJa/rOlDN8rQ1R+XxQAwXascMGDAzIsvvvjZxsbG+qVLl+Y0uxzlyFAKcpSjHDGpYcOGlRx77LEP4fEoAjipyfVWojIaMB514oknPnTJJZcMhJy1Jkc5spQDuhz1WiKNxUQe5q9fv35sTU3N9J07d05/9dVX+5vIRbWvvrAkQi2uAE2WXwIDcgcy7XebWLsjsJs5c+anqC5wYCk1Y8aM/BUrVkTfgf7WrVs3Bq/nm2+UA9Yc9VrKdc4c9SaKzHLIUFO/+MUvRg0ZMmQmnk8uLCy8CH8r5IPI0KtbW1uf3rVr1z1f+tKX1s+aNasD9oOIWf/whz/sg4D6MposRx4KmlwSkc8O/+pHjBhxPAoFu2E//XXULqgl9ps+ffq/4ne4ktpG3sd2qsZvsaS5uflpNJm+PXr06MXgokBz5tMc9QrKAV2ODhohg4Rbb701mi/2/PPPV02ZMmVmQUHB6fn5+RGwSb9YqF1xEAYeUtThXSbqsA32kUhbueWWW2aefPLJvyFtDg5RMoEp6ddff/2fzznnnL9CHIm5T0Ra809+8pOPVlRU3ELTJ4zGqML85B8BX3t7+1xswzkNDQ2viOkPRDngy9FBoRzQ5ei9JBvAQVobamFnFBUVzUTGfDpFNyYBW2fh/MzU6Q+1ibuRsX9vyZIlrbBvVIzvfmHUqFFfSdLmkHG3t7S0tOJvmoh+29ra2s29tKEOOpblRabfLsvL9/iYoyfxF5sgz9YVtad8fgbBP5+uyV/6YwrLSu1RXV393aOPPvqHeNoEPado7uDPfvazm8rKyr7AZtxsWq6c7kB5y2uk7RHw7dmz569Dhw59BYWaNP7ltL0cvaeUDznK0btMhqGT1tYXzWAXITM8Q2ptxECRGXYJbEnpMhMuLy//woMPPvjqN7/5zef2xYw5bNiwFE0ED/PesWNHPWqMewnk6FwClHw2CcSSyivP5TQCA5T2XaxXW7bn5XUCvAEDBlT16dOnPMirauDAgXm1tbX0bI9AhUAONe1zGOS60nDlN6NvKYEPf49DAD+2qqrq+qampgb8zk9//vOfnzN79uy/Xn755TshN9k9R+8B5TS6HL0bRIwPrrrqqtQNN9zQF02SH0bNjQDuGDKBhZrbgQj6MJrEhjFjxpy5ffv2PdBD3xSCQvlTTz1141FHHfVFA7ztmzZtqmGAy6hgAGz0KzU0CYbdAUEJel09m0QEeCNHjhxCGh61xfLly+9GM+ydeKsRegAkprzlCO6zyR+3v2ZcAXg6wcw5F8FvFmrjs7/85S9vQAElZ+LM0btCuajLHB0wIiZJfh3U3Prv3Lnzhvvvv//P06ZNW1ZcXHwr3j4DmWZf1hA4dP9AgBznTYwZwepSMotCD4mW2tq8eXMNHRPIbdy4cYsEOQlE4YRuWYck4O7OBPEk0JeAlzSJXF7DIrdhmbeyqXTFihXvwD5oS5hmwbJly64+ECBHJOf7yW9v0j6jtLSU/KuvUV9BAeVaLPcYjqiFnCCeowNEuY6Uo/0iYmJo5lJnn312PwomQc3tKgSN0ySDk/42eBeJNJldu3Y9MnXq1M9u27ZtL/SAyY8YMaIEfVrHPPTQQ4+sX7++Hv1vkfkzSatKMlvSbzZTZnitu2nuS3uhby9v9OjRQ6+55poL//KXvyzBS809eF2hZlv29ttv348AdN67HXmapOVJTW/x4sVP/c///M9O/Cbp7qwWk6McZaMc0OVoX4jmt9FfHmoRZ6D/5SryubFZ8t0ANwoG4eAPZOaF5FDLKFQMDtVowpuOgLezJ8wRwbFg6dKlQ5955pmbS0pKpmI6qZ6YE0MQywZ+Sde6Ar1s15PyQiKwn3/ppZd+c9KkSVvfeOONnkSiUpv2Rc3qL9jEE5PKIL8DmUvR/3ZA/PxZQG8XTSHZu3fvQ1dfffVs1NTTt9xyi86BXo56SrlglBx1i8jnBhE/Uqnf/OY3/S+//PLrvvKVr1yP1yqMWeqA+tyIoaLvZm9zc3MrBYNEkRrgmDsx2T59+pQiyFbIyENkvMMaGhoKyT9IyXQ3v8suu6wDQWH3nXfe+X9f/epXj8J8+ph6d8sMqYP1L7sTjCKvyXe6C3JJaWAz7fnhD3/4ELbPHlMn6C6h4AJ33HFHAZqaJ5jmjojavr6+vgH/GjlIhvPHpqfnC8rLy8tQmycZpBD2gWS/EX69fpj+h/EbX4naKe3YMAu1zf9D0+a6nJaXo55QTqPLUaekzVy3xx9/PO9Pf/rTmWjaupFNk6y5HQhwI2a6Z88eFN73NiPA7UGGmii5h0Aiow4No989dOjQ09D0tRV6PoesEJn2sNtuu+1D55xzzkdJq0vKkyhJO+vOvSTKFqzSE22PCL9LxyOPPHLvt771rSfRfLl13bp1PTFbEuWhyXIw+ipfxbT6UD4oZDTW1NTU0fdIyj88p+9RVlZWVBJTcdL0h56Q1PB47iSWZR4KQA9ddNFFDyKQ8zfOgV6OslIO6HKUSDqOmsxDk1F/NBldj0zrutA0ub/ghsyKQG0vAlxztsCPzjQkSQR2/fv3r0Sz3cIJEyZ81ABdj6YZUB6YRh8s0/BvfvObl2G93498ujQbwHVlSuTnoAfUFUgmtQ0dozmx6bnnnnvkv/7rv57o27dv9T6uikJAN2jNmjWP4e+RdXV1u9CMWR+WqzvaJV9HBa8Iga8YNb5SFCKKYT8oBDy8tBHzm1NdXf0D/OZrKXu8DjnKUUg502WOkoiYWQFK8p9GTekLBHAoRe+39ia1NmmOFJnqztJXncxhQ6a8E5lzEQLdO2i+JL9UjyV8wzxpasLWm2666Ylzzz137ac+9amLx48ffwIYoTDBvCbzYUYrIzS9c5NOV2VTnZnluA34mdra2jW33377A3Pnzl1aUVGxZcqUKXteeOGFfVn6i0CkHTXBOWPHjh1JbUrlD82K2cy5YWQqXScBBqllx44dDeRXJXMzUjGCX2mSn7XTwon+Z+p/BCYxctSoUVfhd7/z/e9//x0QCzc57S5HHuXEnxyFpGhB4Dlz5vwQzVBX8l5s+wNuZP4yk65b2AS2z4XrBOxQ64Qf//jHX/n5z38+Fy+RRrMveUWrgsyaNasMFZABWN6BZ5xxxmjU7o5ChjoM8yiihxAE6o2ZNTIPbty4MQp+Wb58OWlArHWksR0b6D6mEyWOIMxlisLnuT3OOuusClMf0ipL8a+EzhG4SiorK0tQI4rMgai5VtLzpA2jtrUT6/r6+vXrt2G627B5t2M5CeT2ddkvyr/i05/+9Gmf+9znbscsutQsQwDMppEmASQBHvrfqJ1L9tXEyRoe/WFbPjRt2rQvLFmyZJ8EnRwdvpQDuhx5hCBXiCawr9BKI+GGo90lCW4EBknPZAOsfXnWMFe9adOmuR/+8Ie/P2LEiE2rVq1qgf2jFPq5ClG7IUZMATflmHcxmghTKACQtsSaAy0F1oEmug4CNr7GxwQWRMZqp/Ccris8p+eSglPyELBUUVERCRcp1IZSmLbC3wKzBBjPL6N8qY40jWIXxBPD6Xy/FnFG7bUI227Ygw8++Fk8Ppf9lN2lbKbVrr4x+fUQ1Pvsq1+PwQ7b977p06d/7e23327NmTFzxJTrCTmyRBN1ESgmXnLJJS/2dC82NkuiCamRwC2bxJ/t/c6CMFTXARppBIe6G2644RuLFi1aCjHj36/dDATlIcPPR+ZfgNpHPrUJM1WaZI6aVHrbtm0aQTECGATGqNoQAw5px4AaRtbEE+4r+UtLk1FEK+ZB3yKF2l2kXVP+CHzteN6GZWuHA7SUFi2wfdddd1WOGTNm0v/8z/98A0F2AAizbVffItv1bBpfkn+PND2sV3lPzZvUJvg9OlavXn3Nscce+ywcuD6Qo0OcckCXo4gMEypGc9ivUZu4oLsgRya0hoaG3fjXRGDXXQm+O5pcZ+9IBol5b/re9773ixdffHFhU1PTNog1m3eDspX33TaTddZOBzxv0urXrFkzEDWj42+++eYbsT/0BwDVXaGlK+ossEUS+/QI9LobyEJgh5ruvMmTJ39o8+bNtKB1zoSZIzhktyPJ0YElZDgp9G8MP++88243IJeVkRGg7dy5cxetBVlfX7+bAg60dnEI4IIpJCiF6XUJhGR6MuYn5S7HadF1ijR84403XkJm/PuFCxcuI7cV9GwlkBwlUG1tbXrIkCFty5Yt2/OrX/3qzeOPP74QNcux4nuA/DZZvm8GieeUeBcSvjODKVDfIisBmsF3Y7fTZL7tSsvDZ4bhO7+fPXs2+UdzQJejnEaXI0uFzzzzzMzTTz/9/mxrHJoAiHr2u6kezP/i6/K8O1pBaPLCvOs3bty4fsuWLdU///nP56HZbhNe3jZ48OD6z3zmM020DQzk6EAQfZtiNCP2xTYfMmPGjLH4N+m44447un///kPRrFhFD3UVdNKZGTMx026YvNmfF+7YwM+TVrd48eLPXX/99bP2Y9umHB1GlJtekKOI0MeU6tu376iQqfCqGKTBiekAGT6bJGbGz4R5dcesycektaEZbSVqj5sfffTRt1955RUyTdIUAAq+aECzVgNK73vQh9Vm9jnL0YEhasvmo48+uhZ9XntfeOGF7XPmzFmOXaBPe3t7KZo1CfzGT5ky5egBAwYMYeDLSCQB9GS/CfuJ7sZkefQFt9AfCV3kz0PgreIAFk4fT/viM7lF63MUUQ7ochQRRfchqHiaHAJIA5qx6tn3JhkTU5KfJRuQdRWMwo8haK1HSXzZypUrq++///6VyFj30JJWKKnvLSkp2YvHTeiXa0FfUhs+x4EYOTrwpM1amQ3Y1nsRWOpQuyvG71H86quvrp83b95i7Bp/w/PyD3zgA0eg6Xsc+sYmonZ9BCTMO8zWR5KmKITAFx7TM7TmJpk1yUeMYNe3X79+FmypL1OfhhzlCHJAlyNBa9eu3XbsscdGxwg224mJsF9FMp7uBhN0RUqs6kFa24oVK9b8/ve/fws1iDoEs914nTS3vWiiakIXDQWYENPtaGpqiiIMEeRyGtx7Q2ljAqT2pwAP+t7EOwrw2xDwlfz5z39ej3+0sGb5uHHj+l122WUTTjnllEloKZhYWFgYz63oxNRNv0ngxtTZM3RM2h0BH4IsRYnChg0btm3evBlylCOinI8uRxEhQyom/8uvf/3rxxHg2olxdBfAuuurkxI7gduyZcsWoSnybcxzJd4mjW03SuE00XsPSufN6IdpXbduHWlsHCaeA7beRdEGu+ecc04eTb9Aba8Av19RY2NjGYJbOWp7FaTtXXfddRPOP//8qcOGDRuT5NtLMmN21nfk++FztITbwIED+1599dXnPfHEEzTVJBeclKMc0OXIUj6aBYe++eabP0HfBvnqspp9eqLFhf42AW7L8d4uvEbAttf8NQlzpIYcsB1qFEVUTp06Na+6urrQmDlLUAMvRw2dVn6p+Od//uejCfSGDx8+GkGvErLM0YsS60ZgS3iP5lRinovRf/h17Eube7hNUY4OU8oB3aFL3VkzsUfpoRmqH0rnJ3/jG9/4Nkrjed0JMEnyq8h7Abgtw2u05mFDXl7ebpT695aXl7eguakdGRJpbTlf2+FFBHr5+G3zKysri9FSUFpUVESaXhX2lT4MemzezOar6ypyUwpTtIPDLbfc8rXnn39+/sUXX7xj1qxZuUnjOcoB3SFG0YanqPGoG2+8kVavqEATTfWB2pCSzJdbtmwZ8YMf/OCaadOmfUCbzUdDYKPfJDOSuK9ramrW/f3vf5/32GOPLV2/fn0NMqB6AjdkdHuQ6bWcfPLJbciEeAWRHB3+RH0kb8SIEQXobw1Br+rrX//6KZMmTToW+/SRkIUvdQV2pM0tWrTor5/85Cf/F/NBpbK6CfaPovH2wgsvpB544IERdXV1DZ/97GcbEEQ7VOZi3TnqxZQDukODooWGf/SjH52JGtCH0Qx0IQ7wSr6Jx0vQTHQf+kZmI1itg30cgLQE2DPPPFOBTGjUPffcc82JJ554IZhAlK58b/RLc9wWL1785p133vkyglstgtsuBLddWN5G9Lc1jR8/vs2sqp8Dt39ssqCHYESBKuWo0VUR6J1xxhkjpk+fPvGCCy6YXlpaSv481ZWZnIUrNLs/86lPfer3VVVVG2ghA9jHJcAov8cffzzangr77+n4N00EwVTj3xza9Rx9gbPxmEEvR72Ycl+od1MEcDfddNOYiRMn3kkbnibtBcf7cyFtbGlpuffTn/70z1Fb2qe1D9HUVICmJmIwI7797W/PPOussy6kScNJc5+YkFktQ8bwyn333bcEQa3egFtDcXFx86hRo1pop2szxy0nAefII1pbkzb1xT5Hu0LQnnXlzc3NNC+u6l/+5V8mnXfeeSdNmDBhCghelTDNoOnRRx99CC0Rz+NxNcRrne6Lb04huOU9/PDDn0Z/9Re12X9RjjejOUaT0ltbW/+4atWqH2D51+T6d++mHND1UjKAkr9jx44v06anJO1m2/CUgYcXG0bN7m70tX1vH1eFiLbpwXf74PEQZDiD0Kx05uTJk49BH15fZETRNjWYx06a6/bzn//8NWOa3InP7sL7jVhminTLBZTkqNtEffrWW29Vv/vd7woQPGhFlrL29vZKBJMqBJ8jUMs7Cs3px2MfrGJhC83j29auXbsarQ+vrENCU+g2BMWG/QhAKdi+fft/Yt43yrGWNN6U2B6oqanpLtRA7zC7nef6ey+kHND1Poqkyt/+9rdn9u3b91YcSMf0ZE84XsEdTTffwsH3s30FOyoDvltcW1tbgeek4VUikJUg86FozDQet+BxIwJbA0rgu4cNG7Z38+bNlFfONJmj/SVr2iRfHvr0KihqE7U1WvKrCPseLWxAZslmE9i0q6ysrB6FsaZ93YsP+3v+H//4x68QyHV35w4GPBpvWI4NCxcu/DBqlWtyATC9j3JA14uIzDinnHJKf5Rcv4Ra3CcZ4Hq6J5yRNOvRaX7JpZdeugL2EXgIWGmO1LJly4ooVBwZTgEyAgpQofTbUIJuRX9I67XXXtuWM93k6N0gGhMIHPkodJEloQgBLZ+W9sJ+qLFPkmBFK+S0oom/fV/XOaU8TjrppKPOPffcl3u6PRWR2LaJtqq6++yzz74jt/lr76Ic0PUOijSo+++//yx0cN+J56OymSm7SyRlNjQ03H/66ad/Fa06+ztpNoo+wz86Jiagg78c5ejdJiX+mA5IH6RtiV566aWfoOB2RbYFzbssnDBn4u8GNKt+EcfzizkBsHdQDugOPqknn3xywP5qcRmJxiaVncOHDz+BFmWGnDkxRzlKIoVWiUoUBl9GkBq5r4KlTcyAHQmaOe2u91BuP7qDR5EfAs2CJ0yZMmUW+iBmoDSZTxJldwZbOqaObHtzmT2+iiorK59AH1oNDuQc0OUoRwHRlJqvfe1rpxx55JH/2plwieMy8v2prucSRFonzUEtLCyc9qlPfeqqmTNnPtfY2Fi/dOnSHNgdJMppdAeBOKISzRv/1qdPn5u7q8WFu3nzdTS5FPbr168CNcJi3q6EiCRLdM5/8sYbb3xy1apV79au2znK0aFMhU8//fQlaOL/Xzn+eHsq2ntR7r+Iw4v81MXd2fVcancUmYlj9PsQT3vIAd57TLndC95jIgnyzTffHIMS3l00L669vb1L5zc+075169btPOCI5KRt2oV5y5Yt21GCzOvbty+OwcoKfq61tZUW3M0JNDnKUUBG4Eyh/OiNP7k9FV/j8cZbA9EfgZ3cCy8pffa1IyZ+EU2ZVy5fvvxKM+8uZ2F5Dym3X9N7R9HWJj/60Y+uPfroo5/BgXN6dyK8duzYUY9mx80S5LxE/UWT21FLrKN3+NrChQu3QY5ylKMMorEzfvx4PX/+fDtGaOxs27ZtRxLIhe8S2K1du3ajHG8hMdiZIJdRkyZNevozn/nMtRArGTkB9D2iXEO/B8TTBk499dQvy4CTznxxZKakAUfaGl/ravV2PqZnBg8e3A/z2jNw4MCLcTBvzpkuc5SjTKKVgJYsWTICLSYvoamyAzU5WlWlxzt0kElz5MiRQ7Jpd/wcT0PA4X3f3//+9+9fddVVdZALFHvXKQd07y5FS3h9/vOfH3fiiSf+H5hpA51pcSRJ7kSqq6vb3dVgy7ZHF1FBQQEtjTRvxowZ30CTSS3s47p/OcrRYU6kaQ16/vnn/7OiouJs2rWDLmbbOaGzHTzoeMCAAVVyp/MkYrCjaQhvvfXWVTTJ/KGHHkrv76LsOcpOOaB7l0gGnJSXl99I6+Z1BXKkxW3evHk7+eTk9e7swxVeQ01w+9133/2dWbNmvYH3G3KDKEc5SqRoesHo0aOP+eUvf3k7jpM+uhsbByet+crPopCZP2TIkAEUHJY1UxeoshMF0buuuOKKn5tdEXLj9F2gnI/uXSAyVf75z38eiFrZtxHkbqF1Kjvzx5EWt3379h0bN27cIkEuqdN3NRB4u5J58+Y9iU7v1Wi2bM4NnhzlKCtp1MKali9fvunRRx99kMaOHC88ETx6MNDw5K8EPhzCbdXV1VvIMpM1U3yeeAI+26+0tPQbDz/88LePPPLIQuIdkKMDTrl5dAeWqOOnvvWtb40/44wzfoeS3UVkCjHmkESNjHxwCHBbUapr4mfMgFHi3PwkanbKDEZ+Tr/yyiuPfeUrX3kMB1DNpz71KVr/Lwd0OcpRFtqxY4fu06cPTcWpO/nkk0tRGxsHbnuqcB+8jPGXcByN3b1797Y0NDQ0Ytql2ea7mrQV8ooTbrjhhivx2WdHjBhRnxuzB5ZyQHeAiDrsiy++mPf000/POProo7vlj6Mw5k2bNtVwhBcDVpJPADKXP7KAyHNYm5qadtx///2/+e53v/u34uLizSeccMJuPM/55nKUo85JX3bZZe2LFy9uQ61uPWJSDY7hcQg+JV35yFnAZGE0I2GtO1CxI387ZDNlClNpxaBBgy6aMGHCVnQ7rILcfLsDRjkf3YEhNXXq1HwEObvFR2dRlUnz4jpNPME3IE0ltB/XggUL5uDg+Pu6devW4oDahibLxty2IQeeWMpPICvNX3nllYC+UVq/1N7cvXu3wu9Bq+RrlNbpF+gX+030Ht3D99L4Hv3S+ovarC2a7fvlvusBJprjiu3fp6ioaDCaFYf/8Ic/vPTUU089B7Js/qoSNiPO5jOnazTPFbW1odkiM4OozDtp65/58+e351wP+085oNtPog5M/rhzzz33m9iRr+hqbhwyvEY5TyccLJxmZwOHifwJtbW1a1GDewjNle/g+NmGPsF6ZJLNyERJk8sNkJ4TNXgkocuFrAmQ/vCHP4xEJlhZVlY2Ii8vr5LWRsS/CjyuoO2LsP2HRwkoNYJ+6bvhPdrXr6KLPBuw3+wW37/apLMLrzegILMJ005jHtVo6t4YvdDQsPGaa67ZOHbs2AgcafFgs4AwmPLnvv0+kAE7lBVL+mJ7D0agO/LWW2/9WGVl5VBw5sxuARyTHNdkwqSpP2iiLM9WBrFW5v++/vrr37vkkku2Q24s7xflgG4/iBzHM2fOHIfAcp/cNy7pWQI2mliKfw18LWnAJN2TJLW4OXPmPIu+uL/igNyGA2cHDqDGVatW0by73KDohAgIwJh8CcxQKIi+2S9+8YtRBGQVFRXHoNAyCUGmCs1Xk/BWBX7fEWEQgkgvcffr/aEwICLbMZZxEx5uJFBsbW1dit2MdpnfuGHDhrexb+wiXw8B4C233MKVjooJOeqMos2HsQ37YJsOwPYc/IMf/ODC00477XzsF8VJU3o60+SSMqAl+2gaQjbfHWt2eLgBTapX/fWvf12dW01l3ykHdPtA1Hmvuuqq1M0333wCStS/hC78cWSqpIhKBKfIX6YS5uIwdRbSzNmTFvff//3fD7700ksrKOCkqqpq1+bNm8kMmhsIyRS1J81pxLZTX/ziF6uQaZ2GTGsUCSgoPU/C9h0JRvNKiqqTvyG9l0DX2f3wF6kB++QSAkE0hc1Dhr0ENYS377zzzno0naZZA4Qc8GWjvGHDhhXh2KpEgWfQ6aefPuGmm266euDAgWNAmDNVlukGIYWWm64mmSuzqSsebkTXxIe/9rWvrc5NQdg3ygFdzynadWDLli0fRXNGNHWgM39c0rp5GQkmmD9CMyYdkxY3d+7cvyOj/iuebuvbt28tOrr34nHOF+eIQYnaMA8ZQ9XkyZNPQ4ZxBK0mj8AWgVq2EHFOpCtw622UAHJeaLw8xq5YjccbUP6ah/1zLjJRD/xypk9H1BYnnXRSwZo1a0rRpz4ANegh3/ve92ZOmzbtAtbuOnu/M62OiDS6QYMGkRWhMtv7vJEy8pwvXXfddY/l3BI9pxzQ9YyiDVLvueee96FT+Re8pU5SR5amyq7MkF3Z+9kXR1ocAt0KlC5rcNDR+nq0rNc/vBYnAkTy0MxzxPDhw0/DNjodwW1aCGpJgHaogNm+UpLGJ//oGvblpfi3BP/mYN96+9prr307p/V5RNYa2uG8En1ng6dPn34UmoM/jsLusM7Ml11dp1+6R6bMAQMG9EvKmL8TaXfr1q27+oYbbngewa4dctRtygFdD4h8ctjBjzz55JMfAmOuTHqOTJU0bYDXqeyJ/T5Bk6MovSfRZPIUdvSt6CTfXl9fT1rcP+p2HzK6UaH5eDQBG7bN6ehfuxDbrVKCF3+jQ01De7cpBD/jD7JMlbQ+bKsl6KP6KwpZc9Bstn7WrFnaSGL/qKAXCbqLFi0qQ2FgII7voT/72c/eh/zgPHCWBNUdf3vSNVpRpTNTJq+kgtr3WchituR8dt2n3KDvAaGDuhD9Yj9BhnqFWY08g2gZr+rq6pqkqEp53pVJg+7TvLi77rrrN48//vgiNJNsQUmSFpz9R9TiokjIW2+9VZ155pl9jzrqqGNRkr4I+cFFrLGF2to/gqZ2oCnJ1Ml/BHrIXOcic//rzJkz51x22WUdRtv7RwS9FPruitFtQJGZQ9Dde9S3v/3t61EIjTSyzkCuq/FPYIemzH6oOZYmZUxaXV1d3Y/PO++87+QWau8+5RhBN4m0ubvvvrtiw4YNL+HpqKROSqbK7du3R1t2qCxz38J7/G7gm9Nvv/323O985zuP07y40tLSrajF7YF/PF9cNEke/Wz9pkyZMrO4uPhKbJ/JeK2CgUxqbDlgO7AkQY81PvNL0yHmSm2PFiXG61qpf4xPQH0NfXf5K1eurKDITHRljMF2uOzYY489HRK0u+6Of6Zsi0MbE+ZOBMITkCc15LS67lGOMXSf8lGbu+jEE0/8bajNkfaGA34H7f7dlb9NUpKPjgJO5s2b97cbb7zxLyghbikvL9+BaZOp8h+iQ1NbnHPOOXno/6hCcPswas8X0Qa1odZ2MIANv3s7/tF8tuiX9v/DMnTgaaT1IMOLomrx1/pP0oY6k+wpaEaGmaP2Hpmu6BoytRRJ+XROv/IY772nGyeHWp4wc85F68OsxsbG2R//+Mc3UmQg/OOAXt7AgQNLcIz2xW8y7Lvf/e6lMlClJ+Ofr/F50hQEFjqeeuqpD/70pz+dnfPVdY9yQNd9Knr55Zc/fPzxx/9Q+ubYH4fMrUV3EjHJ1FmnJ1Plf/3Xf/0cgW45DpptQ4cOrUfzBPniDmuQ02a6xpe+9KWqiRMnfhhNkjMPBrgxkJFvlf7McQsBWbjYdjYmlk2TzxZ4xMeyLcL7ScT3yZ+DwkAElPhbxGCIjLYw2xytA0HSzGm2nLGgh032EPbhpy+55JI6/Y/h00uNHz++YMuWLVUo/Aw+44wzJn7zm9/8NzZlSupp/01aTYXae82aNf+FguCv8LRbqyv9o1MO6LpJ2NlK/vSnP10/adKkbzLQETMkkAu31ekJSVPlf//3fz+2YsWK1VVVVbVoqmyEeA+5w5VJ0KojCv2PeU888cQZ6HO7kcySHEwip2wcaHAjDYt8qaSR4U8r/bF2FubX00i6zp7rSVBST/LIlg8BHZp7I8BDU1cx4mDhuwGAoYmTQQ+HxSxs26euvPLKp4yWd7hPWyjAsVuGY3cgAt/Yr371q+877rjjSGDrsr07+9ZhkAq1MfKLW9A3eC+e7oUcdUk5oOs+lf7lL3+5Zvr06XcQE+alvJg5ZqOumBw9gibRJ774xS8+gRLg5oqKih2YLu1kcLhqcdFmtHfdddexaJa9GJnv9XitgoHtQGtuEtT27NlDh60kmHRlNursWmKl9hGwuluO8F5P8gvPSUugycro+y2mvwMNfgx0vLoHRXDi5TmohdyJPqx1EPftwxLwyJd/zz33UKBKP+xmw8mUiTzjUgBQ3fmm4T1+h74PWngGUJAKtens2bO/dPHFFz+At4hX5ObUdUE5oOsmkUZ39dVXn3LzzTc/giDXTJpc0nPdYZbcoclUeeedd/72z3/+8wI83YxS4K7D0VRpBjEtYJz/yCOPnIF+hy+yaTIEONhPIvMjLZaNbdtEwEag1tn36AoUOqPumhc7y/dAgBr9JpnNs6WRlB5pe6T9EfCx5gf7SaEvz4BeZNrEPvB/WIbDcsFi094FCEp90aUxlEyZ3/rWtz5Fpswks3Z306XnyYyJ6RaiafT9s2bNenXdunU502U3KAd03SSaWrB69ephixcv/hXNoeHlvLIxlGxMzSSnGxoaNn/nO9/5Ffr93qbdBsaNG7fncNttQBvf28c+9rG+KNX+q9TeJMDBfhADG/2hALI3aQWanvjLkqg7DCnJz9ZVGl31lQMB/F1RNiHM+PmKaC812l4m29yunuQjTZt4aSNq17NwHDxw//33r6e1OA8z0KM2paC1ctoN4fTTT5/8ta997TqaYM4PZOuL4bnsD/QZBgwY0IqmzA8jT6pesmRJK+SoS8rtR9dNwk6lUNvKnzhxYmr48OHHkd1ddFRl/qhjAp/zPeU2TqVfjZ1zDprv7qmurl6Opsqtn//85xsfeOCBw2nfuGiQf/aznz0L6/kl1FS/m5eXdw5iUKnZiDZl/BY9ZuQEZBQggn6Qhq1bt9Yh1Tc2Nu41wUB+IVTG/n7yVyXct++JZ+U3TbzvLneaVlJdw3J5/QfeJeJ6h/kI0KPdrymKtI3aFs1wDfRLO2cjUKl9BD05HYTyoPUjp6H5+l+nTZs2euXKlcu3b9/esHTpUjiMiISu1r59+7ag2bbhN7/5zaJTTz21cvDgwbSuKre9kv1LZdnoVbk979Lo6vgt+rYXzJgxYw+2V85s2Q3KaXTdJANqZXh4xLPPPnszSmYTtHAydyWxczKowT1+4403kj9uU//+/Xdcf/31LYfLXBhTV1oH9EwE8Mg8yZpbZ+uBdkUEbmiG3Ltr165G8rFxuL7MVz6/L9pQZ5qUvIZ1oiALxS4tUiARxGkXgegandMvvUPX6Bl5n9+hY0orropfF5mGPJfvhuXqbv26up7tPGgDCm4pQpAq2x9tTwW+PEx/Dgoud6G2MhsOo0As8tvde++9RSjY0hSEET/+8Y+vPOmkk86HnvvtNI6Bleedd963UKtbj4IBBazlgK4blAO6nlE+DvD+o0ePnoQO5/9Ck8QA3Q3/Dl2n+XG/+tWvfotmmjn43maUkGli+WGxjBfVmea+/fa3vz2T/W/7a54kMKOAHyTEuD12BYiemva68k11kj8wcDFQ0a8EniSQk8TPM7PiNOTz/AznyRSmz9cYHGUZuW4k8RMIh3ln0TKzmm7D+121I4EeCjZ99hX0EgCvGk3RdyIzfxAOn0USoq1/0KdGfrvhX/jCF87+4Ac/eJXcxbwzIYPO0ZCx/bbbbvsBanQLcEzUQcw/ctQNygFdD8h0uiIc0IPOOuusKZ/85Cc/gGa5EwAyt+zgY/qloJObb77556+88soSBLmtyMBpKa9DXmJlDW7Hjh0fKS4u/iIej9wfgGNwI18b+dx66tcK0+vM30HnSVqYrBsDjwQTCTp8zmDE6Utw6qx8TEngx+8nvZsEvLKcpi1B1i3pma6oO+0v25iOacdStHaUm+jAHkVyqiBwBf82EOBdcMEF/3eY7LQdgR26Lvqg/5OWDpuEwPUZDlLJeFhYglDTXY3g+Itly5atwPMafL7lMGiP94xyQNdz4nXu+qOWNhKd6OdMnTr1pEGDBo2GuD2t/wb9SFveeeedJT/84Q+fWb58+VrUdrYdd9xxew/11QxYg3v44YcPCMBRzD8tnUZmSS2ma+guItS60u4kE05i+AxUIUBI4NExdRmoEjJ9YtSYBvH66L7ZITzVHeakzQ7nnUn3nZFsDwmKXLZsz3aWzr4QAR4FsxBBD4mDVnjzUQS8uy666KIHD4eALdrFHN0fZaiVDcJvM+KrX/3q2Sg4n4a+vCGhkLxt27Z1OM7+/utf//pN2tZyxIgR2zdu3NicA7meUQ7o9oHI5o5/vGVHf7zUb9y4cf3ROTyCmD11QnSub583b94m7JxkotyOf/R7SG+OqrP44DrbdDYbofmmlQIcaBsj6XPrirF25VMKn5UaFzN7qS1RhQjcOktHAA8HBEC258L86XnphwvBmY/5OZkWgzFfN9piujvgI+tM9ZPvhP7B7mjD2e6L8mZNi+btkaaHPumqnpo2A8CjSM0foMnvwcNgA1IaLyQAkN+ONLp+06ZNGzphwoT+1IaowTUtXbq0ZtWqVdux/epxuBAP4UXdcyDXQ8oB3T4SazWonRWjU74EAa0UByFNvqVIVjK7tOD53oEDB+6pra2liMBD1vTCAIeS5H774Fh7o3luQfpdmiKZOmPOScDG6WfzpSXVFwJmwsDQuKupoK25Ja9xV3NBa3Nr3t7dTfjblt/W2p7X1tKa19bakdfU2FQIBHoIXnS9vZWEAEpTfn9sN6CMlMovzO8oKIx2koaCwoKOvII8YuJQVlHSgsfpoqKCjtLK0la8ly4sLugoryprLa8saUuof2Jdwn4nzbTSFNsVdaVBh88l3aN5ekbTK4duUmjSpF3TUdi6ETWhRbSY9KE8riZPnkymzGIy9eK3KMHhUYS3aDk36gPNKBfsxXt7UbMjgMttuLqPlAO6/adopY81a9akUArLQ2ezQvMCmW06sAMTRz2UO2cU/rx48eIxY8eOvWtfNTjiTDQdgLQ3LZbZCn1iXsaq60nd4XUJYKGfLFvaIn97vAfBrGbD9jJ0/uftqm0saW9rS9Vv313a1NhSSGDF2h2vW6wNnII1XUdX8TClY4CLchXHXmm0BUFMGjitOBO8nIrxECBjtJaUFbeWlJe0llUUt5b2KW6tGljVVFZZ3NZvcFUzg540gxotscu+GAbAJJl4w/Y0eSUGvSTdI4GQAljwr7y7Wp4EPNquhpYYw/H2g2OPPXYtHNqLLKRob8VZs2bRupZ51dXVavTo0WnUgDvQVMv8Iwdw+0E5oMtRElG/SKF5qO+UKVNoRYcb90WDI+2NpgRkm8htM+uGOTIEvjCNbKDGxGY6B1IAbc3tqa0bastQKyusr20oqdu6s7wZwUwb8LFqnQYLUrGi5sApLpPj52DHVFJxsoEdv6xZ7Yt+IS4rHqfAgaDQ3GKQNc9y+jFV9C1rLkHwq+xf3jRo5IBGAr/8wry01PqC40QtLJwqEV7Ppll3paXLc9LwemLWDAJWaF7lfajx3HPUUUetg8NjVaEMi0KO9o/+UYEu15GyEDEf2mfr6aef/jSaTG7E80ralqinAEfmSY6c5HTpNymoIhuohQEkYch8NuwUz1jfWmtTax6CWdFOBLTtm3aU79q5p7i5sako82X7v4qRBASgUBsQk403go0L67/rd6uom0XQGIMYa0SZ7chmTJFQkE70G2l9hGqEvQbdosKmFKMct2uMmUrkVYwaYAUC38Dh/RurBvZpGnLEwD3iu0TPkEDAWl+o2YXtLaNRAaDT4JnumKfJrEn7sBUjQTdIAh6ebkBr+J0UsHKYRGgecDLfwJ7CPxAd9kBnPq6aMWNG6ve//z0tJDyJBi/+7UJT2pIHHnhg3T/wTsmSIi1u2bJlx48cOfIb4WTv7iQg/W/dBUWbucqclB1OtCbqBNxABHbo1qa2vB019cWb19RUNuzYXbJza315msFKmgsjINMWMcyPQbnMABO67IEcWyyVKIi9IEEHIAQhqyV6IMfPOR+ezcsrhUrQ6DJa1QCdMYu6Qlpg6zekandFvz7Nw8cN2lU1oKKlsKSwQwbeSOALSU6HoHP6VqiUaRlUk1GiLMDH9+iclh8jwOuuH08GrNCUhNdff/0jP/rRj1ajKfCwXTy6mxTtEPLCCy+kfvGLX4xC//oxaDKuwOG5G9upftCgQXPgH8TvdzgDXcRpnnzyyf7Tpk37VzS/XQdmZ+rophtwS5A/33sYzdXpKUXtge00ANvpS9hOn+ypH47mvtXW1taH2xWFWltX2pzKMh1AJcxPY2ZqwvejZ3Zs3VlSU72jbNv62grU2Eo7WtvySAOLM4r+YfMjM37fh6YZeAB8lUmDwztfo3M+OkpLMngHKv4wC82XIahp76X4IGXSTjk/nvLaOUoiKnIAeUrmY+oclz/G8xjwjJqI1HdwVeOQ0QN3DRrWd0/fIVXNHIQjhAibYhjFKoN/kuYgat2zeY89AbzQnInM/Fd///vfv4++r+3/iNqdsMx8BMf0lSS48nX6Nd+gGv/m4Nj9/mG63qilwxXoSIPLu/fee6cPHz78l2R+y7YEFUuD9MHXrFlz45/+9Ke1/yjb0xvmlbdq1arpQ4cO/YEy8+HCHdSzkQS47jKvpPty8CX52pjJBmH60NbUltpR21C8ZfXWyg2rt/braG3P84Al5uYinVCjAzCnBgCJWcZAYiNLAo2OQY2ey1D2fNulyu6nizN2oCfNm1IbTBsTu1IZAJkBdJCYnYKk67wGq3zJgV38itIl5UWtCHZ7jpg4Ysegkf322rzMyzyVhs91MIXByzHBx9pdv+y+Ah7+bjArrNB2Nv8wEYs0/em4444bcOGFF96Hwse0bL51bie8vhF96bdec801TxwG0zYS6XAEugjk7rnnnvehCe7nxLTTnayzGA4MNG/O/Nd//VfaguewHRTUFrfeequiwYCa7F1obrqQ/XDd0eLIRFlXV7dTLs3FlI1h8bEM+w/Pw/D/MC0CnbbmtrydtbuL1i+v7rdtw/bK9jYENy0jFo0xMrYgCkCLmboW9knwIh3B3FP2IH5Z5p+pjcWAp0OYCe2ZFjtVp0OOHkkJgBOBLXzFnMbwJ+rDATQJUwxUxoEsvyuoDsBOpplXmN8xeGT/XUPHDN41Yvzg3TwRHrJQ6E+V3zJcyxO6oH0FPNbu2traZqEw94PHH398zeEuxFI7vfrqq+OPPfbYh/B0VFcBZNxOFMWKY/rLI0aM+B0chkLBYQd0tOrARz/60aOQgf8FP3JVd81vPCiQ2c6tqKi4Qh++S+xEggCaKi4bPHjw97mNugtwHGSSkajqek3FzlYnke9JvxBrVDUbd5RuWL6p37aNDG5CQbOkrV/NmRT5lrY/3j0BIN7HFi97jwoTptPGqOkS/VLinrK+uKhOEYIq66MzwKWk6dIhXQxFUb18/GSVzQKUTpjUrmR5lQPrOKxUcaIxqNkb4jnZBgL0SNMbPKr/niDIIXHunpzbKJcvg05IZYnepO2DhgwZMoD2zYMuSKyfuREFszuxz/8Bjw9LrQWJpiUUvfHGGz8qLi7+UE/cD6ad6hcvXnz1TTfdNP9QX70ppMMN6FLPPffckSeffLKVZnr0shkUS5Ys+egpp5zyN4glm8OFIsc0a3HIaC6SUwY6e5FMk1u3bt2eBHCdZqj8NSXDa0kmLOf7Unrr+u3l29bWVGxcva0fgltKRN9LOFABQrkj7Q5cNIb2Zrz5b7L1kLU/GXopNTppftQy46AdjTJpIi61jvyNwr8XTx8wvkCdBGF+xYKAFeWZ/gzIWZ9lnKTxNSoLdF75YlNtVABRXyXysPUE8OJizDMl5cWt5Nc75tQJW8sqitvEt1TCWpIx/SNcIFvUo1taHlF3pyWE2t2GDRu+fxjMvQuJ2ozm8f7zwIED72ALTU8S4OjV119//apzzz33HTiM2udwArrU//7v/w666qqrnsIPfER3GHhiIvFgmHf00Udfgcx9j1KHfhNRO9AqLuSzJF8cGCGgK0GAJ3qTFkfnSRJ2eJ3zY00t9NV0FjVJ1N7SnlqztLpvzfrtFTtq6vtYbStTS9Ngwv0tIzYg5j1nQM4zOQrAMpBmIjliVk4rZnHAiQ34Z1Nn4jw4L1drWIwbBVSgHLLeFudo25CL6uGIBDw3V4ItoNoHO+DEA/JMlwGEZvr37PwFCEHRBzwLkkYTVLpP37Lm0ZNG1I4cP7Qhvzg/HbeM9qI2w+2N6FhqeNn6WEadRF/r169fRVVVVUVXgCe1ux07dnxj1KhRj0PMzA957Y7aAbXc0mXLlv2R9vnrqZBPxAIBrTzzxBNPXIE+u8PGhXO4AF2kss+dO/fbaHb8+L5IMzYhs+rCLbfcctL69es3zJo165DV6oxkr9DB3H/KlClfpojKrnyWTOicbqBAEx2sZJItYIDPk6Lt+HqguXk6VW31jtIta7ZVkvbW0daR8hUlEyWo2FSZVpn+Mocx8h776pQN5Vfai8CUk8M1CGDSLjgFALRObmFwDrQEY2icllIOYVCrwzRTTrMUiXE0JMMYhONTKVshCAAtRocUOLOksvXxE8sCjqwvhrplGJlqfHbOamra1pZH6fyCvPQgNG0effL4bWViqbJsQqPcZaGn1FP/ndTu0BJ/H1pubr722mvbDgPfXepLX/rSEeh7n7+//M9Mwv8jasufh8Nkbc2e96zeR9HWF+iA/TKBXGdMnBYSNtvANNI+MGE4PBO9f/zxx49dunTpIbsDu9Hi8l9++WUy5f4JbfbXYXXzuxoE2MFbN23atGXbtm07SLTrasBI/5uc2M3nbLJKcIhHZi3yvb38yPwx855cMH7d8s0DOtqiyEkVM2NtWa8xw4HjwjrBTBiDhwQQYzyM0FZ7UwhY0eLz+Glt40ZivSlMz53JABRtXrbTDmKVJz7RMdFvmjU9A0wyPQ75t6nz+5wDIyO3p7avGYEGpE/N+STZUOqbIZOq5DISrM0HOZO3H3nDzWveakdBBYWWfs89NOfo2Y/OH7tlVU0fA0iQNMeO+43sQ0JgsiUJ/WpSyEIrTPuWLVu2r127tjrbuDZlVxxZjD6+6xctWjRv5syZ4/DWITvWiaZOnZp3/vnnH5eN/2F924nnMe8jf3tSOtw+5OPD9vxP4q1wGNA+7QzciygKrLjvvvsuQ0nuP2hblFBll+ss8jJU0jxCjm0yfbAkyAwZtZ++6Lw+VAUBqls+mhw/XVpa+kUdr27SqamS2gbbqJ7aSSSS4UNLeC/6lXOo5Lwq2poGz1m7jJgdmyfXLdlQ2tLU1tfwVQFmlvg7eZpbZkAIPwzONwXGFAgcaAHxdeXALlaQpLaXDtLSQaMyJkiQE9qcclGVzv4mtUQQIKkYt+JSxM86IIkyV64e0rsWJ2jWwjQYFwCZEsemFezKKW6FFwfy1PARDEPKXDdVtDW1al5sMuYiaaPUuYRcRbF8O7ftKptfs7i8+LWVrUceP3rrmGNG7pRCDwFZkikcryszhcGzAoRm8jBQBftb25o1a6ppTONfVdKeeDJ/fOcItHb8taam5u5Bgwb9XB+ii6+/8cYbeU1NTRn8nICNluFLWsSBtGBajSb0czLYoQ/082jRmnvDDTc8/8ILLxzSkZiHNNDRYsr/8i//ciR20JvZJCfvk9RSXV1do90eZ575jX5JgyFJkDoDRXLxB6cBxrs1H0pEdXrqqacGnHrqqV/myd9dzYujdtq8efN2fI7MTKF5MYOUv4pJdE1uCcP3jY8u2peNrtHakisXrhmwbtnmgR2t7SlmsIwSHDjhoiC1ZJvGFKechueDXGyjtAoXI5xveouxQcKTCdvU5g0BAqFfTmhRSuSoJAwxF2Ygc76+6FyB8OeZaxBreRZZ2LQpGL+JwDGnvgZmXhRAKPAGQPghTStbkAe5Qgz+puLpCs7c6gQKEAqbMsWMPgLhVJRn2ghGBlQlQGq0NDfvaSlc/MqKUasWrh8y/vjRWwYM77eXd2AI+5kIXLHX2Ycnxy4EJK/t3LlzF62x2pk5U8wD7FteXn5LXV3dSGTsd0C8rdYhxdTRdUMWKzvOSXDFMV3DAWRJZmPSghsaGmiX42bkof1oBwXxfjSwjzjiiHv+v//v/7sYgY6CUw5ZN84ha7qkSZHYKYtRo3tAmYnO8j5qY3s3bNiwNTS/ZWPe9LE3bty4lbW+N998cyscQkT1oqkVNIfm7LPPfoZMlQRwnYEcDwZqJzL3SMlYPicjJaWvjU1NrNXJXbaNeS4SGDpaO9Sy11YN+vuDrxy9+q0NQ9oR5GJNBERGWvlaCwA4k5gph1vRw687CIbtzHXa4I5520CZ9M3FDzuToJtM7pv7/NZwDF+WQRscdEEo5jo4k6gCpxcq6wv0amwa0BRLWEIF1Mh8gUFJa98KCp7/UZn/BBwqCXKa25E9mCaFuGkFzMY7MgCrr2ltw2P4EaeVy9dM4Zv3NBcunr1i1Ly/vDFu+WurB+6u31tg+lDYntYqEEZlZgtoCvstmzPRDL+9MzcFjxMaM5deeukz8+bNG09jSe+jn+tgEAnl8+fP32aO29etW7dZRknLsc1/fJ3aCd0VNaT9yTSNGbTytNNO+yXSgEOpPUI6JAtODT5mzJiswSf8odNZRoTqZBUPUuWrqqr2jB079gq0T1ejSaANejkZJSKFdb4cJbMfaLMSTGemShIEtm7dWstt1FUnlpN85XyopLbUIoLynUXrBqxftmlgW2uHKYu2k7kdcMXXRQJgdT0BBgkmS1+Ls+48k4wHC7zKFoDl4WJ1ZPY7aR/iM0DVmAuladLqO8rT11y5g7bhZbSkqU7kyynIe1pinbsHmclb0T2qUMpElEahj0I7VrElUyWMARBBLCrIxZ5n24jWTVfIJLyRci5Tfq64vKh1+LjBOyYcP6Y2rzDPFLXzrYTCNTZNdT3TZ5KZrqtgFQ5SoflkqOnc+tnPfvb3h1AwWiEC9Qg0287CsV2J7po98ma2QDI+Nu2eGjly5BA5P5GDUzDNX6GV6GvIYw7J4JRDEeiozHmoifw72pBvDhk6gRxrKN5LquulqMxv+u23334ATaK/gdiE0ds7egoBOf/FF1/8MoK0t51O0sMEbCjh1tLu3tnAnn51J9GVzGTCuVEZALd80wDU3vIlGCQ97y440HNWxdhf5MyJqhONDsA3O2pwGBE8b0HOAImxvYFnrpSgkzC2dUbRLfgFz0sk5vNsxyCBzkaWCNjx0M7PQ8nXbaJsTlVglOZw8rjp+xw9KTKwKTnQM3dd/ZSIuAQIV2eRE9SNNpiwUjUBHoLdllFHD6sHa17tnD11Z9K5KGNUYNoDr7O5dzIqEzWiu9A6cgfyg7be7rdDy1Y+mhcH/OUvf/n80KFDL8KxmR+OZZUwDShMh/YJHDFixFDZPhyJjubgb73vfe/76aEg/Id0yAFdZyufEBMnTa6zqKtsxB8f1fga7Nz/D+3dtKvBnt4cdsxr2vEE8CQ/pST2xcn26Uy7NU7p6DxpixwjBVofHD23ZXVNn6WvvTOsaQ9tUurAB8xctWTzI6+2Jea8eYATgqKfHt/3YhSjHzdJOg46sbqhNWdqnVZS24MEIHVpehqj9Sca+yBrlubB+FmdCV3xyzrjmvbNnhJUwAKe4VI6SNLaEm1DsVMwACGwKpfU6JT1N0oAYmjVoBNAJ5x2ED2vlJvWYBMy7zKoQgZki6SLy4qioJUjjh5eD2A1DY9Bh1s38XPQTSLtLvRJhcRgh0Pl6VdeeeU/Lr744t6+OLRCjbUcfXVH/+QnP/kW4tTgzoTVzq6RRkeanQzkYU33+eefv+TXv/71ykNt2tUhFVJLHwRV6EFoR38EjweHTJ3WX6TQWWlzMZ0z4zgkegcZ9p6bb775zurq6tUIIA0PPPBAb/2YVIfU7bffPu70009/DMs+FdsiK8iRAEBtg6bKutCcqxJtVHEwDvFM9pFIcDP+N8N6Y0ZUW72jbOELS0auWbJxUEdbR74EC2asJhelMsyBIJi34mW9YtVDa0gonjLmM2Ui9bkqQbIODIzaomIQVcZcSU3Bc88s9IhjAW4ia23T48ATaa4z5kyGAJUJchADow1WAQ/kOFKTyxJWR1uViVVNm527rAzqZChnykaMANi56fyfhkQQ4rSdYOELA0qxvhidsVlS3Ic4EEdJ1ObklWjSaGpCXs3GusoNKzb3HTJ6UH1hUUE6nGLA/TGuvB+Va/xPsr4Z45/GAPqjaOmyNFpBSiCBhI9wHILH5eizf3YX0tKlS3st2J1yyinpOXPmpNHftnH69OnTsOwFwdjO6IlJ47/DUHl5uRUETHsUoUvnfLQGPfLEE0/sgUOIui0FHWwyHboQncvfQTv7J8IgCwqNpxU8VBBurLsROWgGgH7kkUd+ddtttz2Fx5vxrwmg99mi2R+H5pQTcQD+kgNxsoEcaW+oxW1DZa6ts7ZhcyTz2nCB5aAMVrlob+lQb81eNnzLupp+LlTfaGbaaVPgxddzOLriRZWN285moPz8Qg0wVj8AfFOmlqsya2GOcwEXQlv06hOoFtrPSGiOsQanA/zwPHMKnDbHQOgMftrFj2SSfc8yZWt2BPBGqyxpJr5DKLUDeCZEjnWVDjWn/caApyDMEwJNDzLMl6xY+iVS3Ad4myA2kfqpJnKjYWMH1x110tiasgp/4nlnGl5Pxj9pd6S9dGbKJLMdHm5EkPvUySef/Ab03tVUqK6lqJENvf7662d88pOfvIEEYGmy7KxtwufIp0lTNOR96a9bu3btIbMe8CETdYkNSuu4fZQnhct7FFjBy1R18r6NNEr4yBoltmcQ5F7o27dvLZoEKVqpV4Ic7TGFYH8tSlb/h5dGdWaupNVNyJRLUyj4fZmWbA9ej1CJYBP5LB+zpkcd3kRSTtq8dlu/2BcWg4nQBWykYyRJRHgh2l1siWMsdQqyBLb4XDBiqsrOJIgz1fzL7jILgM4eGSwCbT+ycmdefoqVI8ggo3BZkPQdjmxAZODSRj5wGlwMsKbcfM4gZzVmp61o1xja75w6s2CdEM9DFwJCrFOb7yVmW4Bsz/iqsmAtQQ6k6dhWym8L/q4s5NgEXGBp4LOldDev2dZ/9iOvT6C+xv01LbZrMufee0nCWbbxTxGHNEZorEACaROVib+jJk+e/BcaexBbwrpo54NCVL9mNMnW/PKXv0Tlbs6jWFfbGJ2Nf3mNf80myl7kJvEa1PQ+gf7Aa4gnwyFCvfFjZRD5opDBH3XOOec8GfrlOPiE5oB1ZX/OIsWkly9f/vK11157P2qKG6ZOnVrfG1fuZpB76qmnvoId7QudARxP/qa5REkSXNixw3wY7BLKEP3Scl3LXn1n+O6dezyzj4sliXLRJoje+uT8jIT/LG0YPbAGJvPzzWScltUSYu0NJFxarQhccZR9N848rFOgoXDGrrTWlAlhhKRpM5BKa9DHZNnjPJVK9toxl1E2qhEs+PFz8l0L4CFR4Ie22x0JzTCYWJ6gWgqzKkhNS2VoXVaLE0ulselQZ1Yx8AuyvzalnBXVexa0NEoC7Y837ZITV5F2Z0zoik2V5jd6OowQTtr8NYk6m2SugiCVK6644ru9eIV/AqBK1FZH3XfffZ+cNGnSWRAPyG6Pf36W2gItR8Okxiv9dehGWgmHwPy6Xg901ODDhw8vWblyJW37Pio0WdIqCEkgF1IS6NEv2ps3zpgx41soBa1HzXAHXqLOq6EXEZUbpckCjqzsDOQI+Ddu3LgFJdWMzheaJlQQSdlJ/tEfmilTy+evHrRhxaZBrILFKOPC/bV/bsAobR4WgSYxj2RtKHrOAZ2M64iL7kDGD22nWZJ+gIvytAlTA5sN+MEtYqFkzscBFSfo3dROg3FXbTuFIBc2dlAg/1gUJSEdkH0XHHBB0vMeKaWy3YgqlNXUKMEqLqFYj5PxNQzeIUBIMLKqxKyt/0+4iVzvMFYBZRePjos68shhtWOnjNrO5sxse+NlM2maNkl8JynqMEgz2rsN+cbdKHh/b8mSJW3Qy/gFEQrsBSjA90OedgQC8tdROB5J17ON/2xEz9DqUTI4hUEfWc28qqoq2tKsSfVyE2ZvN11GDP6NN974kkqYFI6q9Q450bkzSnoG1fIdt99++y/xcNPQoUPJ9NnrOi1ps1j3oldeeeVHXYEcmXA56jTseKHZJtt9JjIPsZmS/rZv2ln64iOvTtiwYvNAsLEjziSpGeSMNC8MVxCBj8vJ6T2Cs4E0NWp37BJR7n2j6fmA5gGYSxyMJhIhoQfmZnViqQnaAmpxbDuPb2tzRTO2Ok4nlJC5sC4D8xGCYrJAIRm9CRawM8AhBnLveS8NWUxZBu3siuZXyTBVo21G8TpWE1c+1MZaeVwQJXDaAznl1gfVrhrcXcCZRi3I2fxFXTgP+k1zeva5DSs3DZz35IJx65dtqqKm5L4KWUgGr4g2yXie0mptbe2gMRROnmbilYZQML7x5Zdf/jFqO0Xd4T/vNdEUAOJpJSUlm7773e/eQ3sl0/Xujn9J5PogCxGfswkTZYFp2Fb/RjwaoHcrTb0a6GiJr69//esT0C/3H+HcsIaGhl28LmO2j5R0nW31ZLK8+eabf4rSzmKU4Ha88847rdDLiOqLvrgBWFfaeuPKzkCOOiKtbsArwSQNbDLjaD96Usklu8yffYeutzW3pd5+ZeWQ155eNL65kaYMgMd4QJjC2H4XM1EwWpo5iR4R5QHzqGGCRo8JngABeNpqGdpPTGmdPEY1BIMZlJ2sbt7T8dwuc9tvL78hbKUNx7ZmSBftYtNxXFtxPiI9YsxWVeLr/GuuS4cXviA8fnFBZHl1UGSH7+xHjIY5a4spC2QO2OR7NrAn/nPeOiWbWTvkDUlz8eOEvWZV8h3TB/yXE76lZ6iNr9CSYgVL5q4c9eazb4/c09BcAMEni9+zPj1v1/qkZ+R1TKeDFlOQzF0SB38VFRVdsWjRol/RknvQCxk98bT+/fvvQBPjkv/5n//5Veiv010E7cjrxGulH5PBbtCgQV/9xS9+cSL0cizpzSisBg8eXLpq1arIZBn65davX78JGbfOpoZ3pp7TB587d+4jn/vc5x7E0034txd62SaDVOZ777130NVXX/0QlndytshKAjbaFJUmgNO5SnAsi2czJnontY/U4t56ZfkoBLgC4W8LrH1huWPOqJQIFjEoZZ8Btk9K66D2QAisudFgkgA8YCOnc7lFvp8sRTJgpBnYwOTFQCSKBT5LZXxRKokhByAKynJ4oQtJDS0EN5O296w9d06yKNn4Y4ooTpDfwQtiDOqVaZZ0+blzX30T5kgVa8SZc+kC06ZIP2gCTkOWy1ukWsk0ZVXc1AD7rvN3xiZS+i0uK2w77syJGwYM77uXn2NzJpnYqJChaZ7HQbi8WJy266sUYk9r4Cb57cT+dm+/9NJLV/TSuXapAQMGlKH1a9hPfvKTD5922mnvp0hMvqm6F8fAwkBekr8Ofzb88Y9/vAh5ck1vnXfca6NmjjnmmMLZs2d/pbi4+EJs+FgkhZixY4NuwU7KDaqCX5DnKphTQ38UfHLDDTc8iEltQq1xz9KlS3sdyL355pvj0Hf4u85AzgTibEazhNVGlYvYi07NNdZgIoYZAJUEwuiYFl9e+uqqwcteWz2St81RIlzA7dYtQMlgIDizluHSVrGJroUqFmsUygUpOMYWAZjiLXtc+9AK+859Fk+9szvHqBDAQLnACxW2TUAh85W+tRi+reblKiVekbH1GkxlTJtz+9vkpbPE+MqUBDgfRZSNJHGXM6uiMiJEbXG0EbplmtEno40CTK10Qr0k8shzlQ3swE4gdybO2KQp0uevBf60Qwt2AmZdeRyoC8BXHe0deZtpH8P2Dj1wRP9G+7Jpa+7r7KeTk8yDsmfUHU2ZbShENiLglYVgp13AxsAjjjhixsqVK19C4XwXWol6E9jp//zP/2xfuHBh+8MPP7ztjDPOGIBaGPnrbOdRypt7mG1cRH2VBGra2V02HNa/AgGw5Ctf+crztbW1vTIwpVcCHa1+cvfdd5+LJsXvhetY0sRn9EWx89Nj5PxMcM/8xIMPO+72m2666RdoDlyHH33Xk08+2as+DIPcxIkTZ2GZj8wGcmQ3r66u3kb7TEEmww3JSrRmWxTPb8E+Dmqjvbtb8l/768KxtZt20PwZ246hVcj/jfiT4Lbg5qy5B6JfZU+0EoqJctYz7dLl2cRs/YyAwHJD7cxsyhYCBABqXoklnuZgGGMqyfSXNMClNmFrxoxaydqKCkqTJYCvBhkBIwTiZA1GqmumLZRvwxPnyq5NacyFiq3IDhBUABpxkIe4rw2IOAHCgI6rqKdu8ftcHpG2kGxU0DXjL6qYd4IzoXIbKs4LWC5ys/tANLe/ggwe19c0lG9cuaXf4CMG1ecXkpU/7UVc0jmDnbzH9yF57NC0m4jB0zq4qMx4PFOCXb9+/S7Cv78PGzasvjeBHZouATWuji1btnSsXr26BjXPk7Eepcp0GlOHjLontYlZcEKLifbRu6iQTDnvvPPm/+xnP1sPAL1Nq03+sAeTqNFpS/gkkyU5iGk18qT3VCcTIPnYrHzyPTQzLBg+fPg2zKMFehel0Ik8lkAOTN2TQI7agTdG7arefM7mygRzJkt0etXC9f1XvbV+aEcbRbbKWdwaMs2CbG6EIOoxNitxpKWYFO48dUYwB/sST/xm8qYTeAcMoBKBkt8lcEvzslhB+bU8MGXWHniw9hVYKBMCUSg83mlrWuon5lgLfxsoZ7YVQhh4dkTxLhckQFwdaG7By26+noM90yYQ+mLcAsuZxXBTQOwVB+kBiEmTaeZ7RCmrsGbKFBnXotIbMBOAHvcrg/0KxDdKGe0SIL8gv2PssaO2HnnC6O1mebo4f7HCCoNcOtjZXCWYLyUNHTp0QNLC0MpNP1j/1ltvXfXXv/51dW8y4xnttbCkpGQgCvhTb7vttq8Q2OkgMEV3M7AmbAdpwvz4xz++TfUyE25v248uirJEjeZL2HAjpC+JzHTE3LO9mPSBAmafRhB5CiWtpVVVVXUIcr1tYVLVHZAjBzlptVy3bPVmQDOanN1tQGpxDHDRPnHzVw9av3LzIC0thBBqc3IOFgsQ/KjVypgZGWbH8+iEtC9CN1jGT2LA9poxivqhKhyTEk9C1175TBmZc/utAwnEoGOEAAt2Fm0gUSg0EZFxQ3AppVYXHY4aNwImTjkSJh53JFT1q4yub91Uo7ZW18ALT74MDTsb44JpbSESwKottoWNmdM2W4yBpiBOAZVzAjIxRZZeRX4sYJOi+07c9hnfJMO/KtXRjAxskQx48Il9V9mH5L9GQRPiiG1ZJT8Dx/w4S298vR3N7SvfXDu8qbG5YOJJ42ryi/JoEFhhhLU7elZOQWDA01kCM+iXBG3a3LUvkldVE5yBh0ccd9xxD1HwGB6v6S1gZ8rf2tTUtPPll19eOn/+/L+Svw7i6CSleuCro+vEixE0i9lfZ/yhIy+55BKKkP8q5QW9iHqV6ZJMlp/97GePwo7yM3KYGt9cRGbbndBM1yUp55ebfd111z2IUshmBApap61XSVuXX375uO6AnFkBJmsbGAlVm2NlTJTe4OVzGvR7G5rzX3li/pHbt+7q43ERTzvzfCjRrzZzqZg3C03AAZe2/hfm1pZPAtjgDZXcJszQzaPKM4vFv0YRcT7DgAuydmZMY/H9lA7ALhQYVKwlOK2JXWtOqUzMR+5bEzVAYXGBOveys+Gyj1wEw0cPg+LiIhOzCVDepwyGjBgMp51zMhQWF0L12s0qjSYybi9bNqnVmbRZ+9RCfbRVteWPYyaFaZK/jSi/tt/KIZbzx3rPKtle8h02O/JefgD++/E60g6gbbVkNS3wCajTUpAw1WBbgCuMglALtccNdbvLNq3eVjXkiAH12MZpA24e+ougFf74tpyB6c72r71797bQe8jow3Uy+ZlK9INdiLzm2XvvvbceoPeY8hB4O1Cg7kB/3dYzzzxzwMCBA0eBaxM5FhPbQDyXRvdJW0VFRbl4PjJhXn311fORT63vTeuC9gg03mXKGmUZrmOZpGonSSR8jB9k+6c//enbECyXoq19J8Tz5XoLqT/84Q+DEOg6ja6kzSNpF/SemCrDCEuWYg3f1FvX1PZZPGfFKJKAnflPZwnXl9ocgBaTvZm0DbU34ORHWoKIoHTOlUzToF1Zw4vKZA3WpQZeYKYtFGsnnvonlLvMurGmpLWsj5uULTQnX0H0zYsgy1hYnA8f/49rYMjwwdDYsAcadjSi5rYbWlvirldSWkwr9cPg4QOgAIGOtLtf//BB3dbSqoQGqUGYRU1+GnxQtaVRYqVKvtipSuf5NLXH66Lxo7QSzRFCfPQ++wad8sfZZ5pJTfoWjO3zUolUmVmZSFkwBVJxG/BTcbU1hHvhOfDML8jrOPaMieuHjh3YKLQ6vyWCMcQrq0QlzMJjKCgDedYACFvVmDHx2bf/9re/XfHBD36wFnoR2EFsyeuH1rNJP//5z7+O4NSfb2QzXWZrC6x/P2yHCn6O6o20ZMKECRchz6L1gnuFQtFb5j6oY445JjJZYgOOlI1NJktex1Ka6/iPn8sGcmSyvPXWW3/y9ttvr0Hf3y7oRSBHZe4K5KjXVFdXb+0M5MSz0R+DW7iMl9H0aJHa9IrX1wxc8OKSMbQhqgGPUJIPSxuL1HZOc3SNS2EAS2cBOW3+4dVPlEknzCOccGzYnpbgqmW24AA6itAENsEpp7TE+boeIQvO71ppPSyQhWgN0SosYaNo53QywEQX03r6zNNh4OCBsHn9Nli7dCNs31qHINdqstTQtLcJdtbughUL18AWfGbgkP5w1sWnqo50B0dd2Ia1GprTHJ3qoaQWogA8E6Jm7V00dpI/U5ogwQk8aSnFgGgh5d6npNPiNXuYTVOPf4O21PLxBFFEwqFJmwMoGItjkNNWmnHCSXtbR2rBC0vGLn999UDl5tbZAKy4XLFMI3c0l6Z+fkaWisbk5s2ba9LB3AU2YyIdc+GFF876zW9+M1B30/f1XhCWpX38+PG7Vq9eveanP/3pvcrMr5MglvBO4j0yYfJauvwctuGkhQsX/j/oRa6xXgF0qE6rb3/72+PR7P25EMBoHcvweZVl0ieTeF8vWrTor88888wyPK679tpre5UmR0uboU377s5AbuPGjVvRVBItrJrNHyd8cZakg50Gvxm00NGaVm8+t3TEmrc3DI0KEQvJZvBr5qeOp/igJwDBmTZD7ckAk2CSKaNtaEY4Ibd7tbH+ImCQ4YAOAyJePtFDVuOzSUR1QbAxxVc+040VCgZS+5p2ifKxU6Jk1IhPjMBWw8J0yypL1anTT4Z1yxDgtuwAuyKLDpoQ4tVa6Bl6dhq+M3LcMPDmzbOq6RxaoipyYjboTMmhK23OHbPsyAKNycBPQAODmEzDLTzjHtPuoXCsWt+umDcp+oufDjggc7d0sKqLy8uV2whL5q24TmsWbxi64IWlI2jHDX6YglWkAE3jJB3sddcZUTQmjdFsYEdj+/3vfz9N1i7uLWBHXQktZ61odqx74IEHFtDizxBLOx7om2fd9xC8WQKfBHt+BtP+xGOPPXYk9BL3WG9oeDVixIhi1OZ+jCbvD0lmvxOptrZ2l/dwEEmZpMnxh9q9e3c1SlS3lJaWrjGz+nvLVAIqcxGaZH9IqyskgRxpsrTSSWtra0tn5gSuq5z8ymOOGInx00VMcO/upvw3/r5kdGP9nlLHZKInhdRq2HFo/gPwLHUggkFY0UrCLsEAWSMMSYNvDoWEMjkuZ81pynuPNTkdll1nmtAct1bKgVtCwfwgGn5RhQ9EpTHRf6SRXX7NTBg2fBjUbqkDyNB0BAkbHaHFgKH9YfWqNfDMw89DQX6BAWLtP6osqoSTwLw5fxIYdeDiAxmZal61RVJ+fVjLBvmAtlIGyFuUcEraJJV9KvgGKnPtTgCt3JaF9mMDaN+dZ9+1fdBLN07P8oe4IFq8oyKzccupl5ywurissIPAjMcIpyIXhKbz/Px8G7yisixEgea/gmHDhg0O18jkSeXNzc1/6t+//+cgDtLoEkDfC6KYCFQCKpA3jsXfm/r163ck3+sKlENTJi2IPWDAgH58n9YDpbUwjz/++A+iy4ii2w9qnQ+6RkfLfKFj9OyysrIPyMal3bAlyKkuwn654wnGv4fWeGtra9uCQErBJ70C5Ez5C7Zs2fKfnYEcabJkEtBZTLK8jBcdsz+OSIKc1nZ3Zmja3ZI/76mF4wnkQEjAykVFWvMjJPjp/GeiI0W7czuGBBAYurTzscV5eGZG96hksr725YqhrWZmWZvw2XHEYFSXtCuj9tOXdWF/nDHFanFd+6ZTkZLWcqFJiwoKGEzw23W0Qf9B/aFuy06AUNHgh0MLI8Q4Tu+MHjsKv20HGFVZFFlICpmBA3GjGjOnKau2OXmAqIPjrCbGAAStYCNf97RIxUUE21lUmKdy3y4OY1Lss3XxRK4z2fcBZHm0LIprI6OUeAKStn2A5Rqlm/Y2F8178s3xzXta87j8PMfOHEfX+JyWjnVpOo1Gjkfa75E0Oxq7IIjHNwLhh3DMf4VcNNBLiHYJJ96ICsbWO+6447fEM+m67iTqlElqd3SPlgiTW/pQnQsKCk7905/+NAN6gVZ3UIGOGgobu2jUqFFXhmtZojps58uFWly2tJRy61hS+Ozzzz+/jCZvon+ut5gsqYx56HP8MjpwP98ZyNGODOYFz3TAxxwWzffDqQNiIOq6zbtKZj/6+lEte6K1KqNkzT9oXslQMxJVG8M+3aW0EY+ZIUmWZNl56E/UIjiQH5XZsJTOIKaDbDMA1UMiaWaM0rJlyqySY/3anikHneACO8CCDj+kna3QKw2tSYnfAQpThZAOC6lFdqJMsmR0LR/fbe9oz2gc54eLs7eandYSbNxKK5ymh5YCpF3KBg5cVSGBkjRe+X2D6sXApTLfM98oanSS1YDDdtm/ltA1tF0AwAGe+7wOQ7mY2i2vKupl/4kAtRnHwuxH5x9FW06BQUi0ntjV+Wk8hfsyMn8RbeL1b5p20BnY0Zq9yJP+Ey/1GrCj3RfQZbTzpZdeiqYcAIDuzntJ7UBLEUoTJtUZ+S9NsyiEg0wHFehoQOLHL0bN5lTZaSjKMuwsPSF8f9UXvvCFx1Ejqv3Upz7VnA0c32NSM2bMyKuurr422y4EvMWO3JGhM42ON0uVacj5cTTqNyzbVPXa0wuPbI+W8jKkHZONY9m1MAUlaECBiShi+inDvo1KBXZHbwF5np/PrEKfmXis+TGQaONzk09AsKCwY4fA71qpnYGKrVvRcSoAjdg3ZwIilI9bXhMZwFQu3iRmsEqBPx+al7KitJr3toJYidM2kWdkA7+GYN5AjZsBjJEtbnurdJoGZRXSYHsAaPId5eVktSE29KYV94KY0qY9fHO2NDV6i2UzmAmrNKcscNUWW4mIWqU8F6eVlnQy1LKJk7MF/6O5uiqQY0fFTjoFfgHxentrW97rz7w1fvVbG/uJtssAMGPezAhOSSLayLUzsKO9JFGQ7U2bt5KPrRk1zjrkmY+ht+idpBiIsN6hRkvHVPdwlwPk7+eiUF8EBxlrDqpKSUEoo0ePHn7xxRd/0TSkog6CDb8N/E7AzDvshNzYPOKpM+759re//ZOVK1e+g5do3bneYLJUZKL96le/evLYsWPvzwZypMnhT4esk03ASJnCNMVr94F8VvoSVs5fO2jFG2tHALNnxpL4UcPkbQ6ZzM3wE2Uj2oTqFl/zvDecJr8PYF1KzEjN/fhbR76TWEcyNxXPFFZaPqs4A6t4RdyL5p9NOmGCOvaUyTDp+Alw1OTxMGjYICDzZf2OXcA+JMdT7YA1ZYsZvAE+FeNZyu9fsmpWUXK/ytU7+qetvRX79BGQX5gfNAjIBnUvGZjRJrXtNdth5fJVuiC/UEktzjB5NkOKaQ+2hIo7irIMnyvhnhFA4QL6zYOE+6PGj4TjTjlGHXfyJJgweRwcged5eSlFUyTaUVtV4HvMwAlBMeAm+N9E2L+SzwO4DVu54EZMMS+IvhZtJAvW/+bMt67fKqeSq7DutoFdY9n067bsqMBhpweN6N9ooiVt7aSJjsYbpWcsJqCyxCaRVkNBKn369CmViTGPQ7A75QMf+MBcBJUtvWSumT7ttNNoQQ6NIF2LAvmpWOxo653Qmqas0Mff0FL0LJovW2mpNDRb5ptni5Cv/X7BggUHdT7hQQ3/RBBKXXrppbSmogUwYvY6S3QhH8vGD65Hq588/fTTK1BlbkDA7BU7ABOgT58+ffyUKVN+kQRyNDAo8MSYK1VSXYVZMtLkaNDF2865VR6I2Ce34vU1g1YvpshKqy6AnYdkkmYtysj4zDTibCUjhFh1ixiY9oPLwAKWAS+wqgwDniDFV5QtlEEQI9Qbpm95VXxP+PqIGVf0LYdTpk+F4085FopKkqwip8OunQ3w4lOvwFuvLQGahxUnIeouK6Hlb1oimjPoMbCYZrENBU7VIz5P32bNmjVwzHHHxG0GAuxMzsrWWjSi+dteW4c8XRofLagZBYbXp+Qym8YWKksGNzFaqQbvtgVESuPks0+EGTPPTGzPU6afiIJDA2xYtRFe/OsrsLu+UTB57ZdFsVBE7ZGyCrFrTglKFuS8dtDGPGAdslHd0qLazkLL2rlSticrgWcsgpi5dyw7GcunXe0b1NrF1UNoM4SjTh5XI0z/LP1IbVnJ1VRC4mdJuyGBnTZxlWBnxn7fiRMn3nP99dd/GI/fIV8ZHGQihQDLuuvFF19cRibMU0899YOhYqETpjZpEZjDxzU1NTuOOOKIYfzc0UcfTavIrIODSAoOLhHQDkfpZwEBAEVZ0py5bA3Kx/Srg8hL+t2zZ8+Gs88++2a8vBb/dkMvmKxIG6cOHz584DXXXPNXLOcR4Q7pPIVAzkUhUkEEqQg4UUmDzJhcouMV89cOXLM4nj7gWDV43MYyAKnUWZ+YYYzaZ426M4HMJGqhTJQrHjAiIb/gAvo4HfeufG7UuJF6+szTFP7GpdE6a5niJRIVLHx1Mfztzy/q1pYWMaXAVF4pL+ADDBe0hXGF9kIV/WGjPaWtta1Flfct15e+72IE5Q6vdBL05C/fS6k8+MNvHkDnVb4uKijK9riXuWKs1SwvMGpoOSfB7pAgokEiPCgoKtAXfuAcdfypx5r2BEj6TsoADr296LW3YdHrS6B69SaI9/PTUocz2nLwvnfBRXsa5UA7QYszkxWVzZ8yaGY1O9bOveYxGwtp72MpVxc7wVyJb43HYyeP2nz0KRHYpUy63iTDcBGGhN17PH6FbplCuTs33+e1IR977LGLrr766hrVC9wrxKvwrw8ejn7mmWe+RlGYXZlqs9GAAQOq+vfvX0n1xOMTm5ubaTu0gxYrcVDtpqgi008H2nUXkzaTBHIhZbMVY4N23Hbbbfei2lwDvWR/OSrb/fffX4hmy7shWO2FiRy4BHIqmLeixfw4nSXSi4ikT7lg84r56wY4kDM4oK0uZRUUcA/wSGcNLBLLY21PQQ+MDTqeCO5FVAqQA+14sME3qftpVrqs68XoV2kYMWYYfPSGK+Haf79S0bqRZJpMR9Ew6ThZ0In/0TNTkIFfef3linZ1srZAEbAuzV22xUwBhXnMoIlSCbIhf5uIqebl5UPt1hq1cOEiAKlZgADw4JeTWbhgEbQ0tUJ+Kk/JtCEZ5GwatrG0diDn4yhoKTWYw46Odn35NTMjkIvbk66nbaexnSduTeCI1uPQVPzP//5huO7/fQwmnzRR0bt+ZWJpRWdIIbbmikGOZQ5tr4cg57eRMHV6zSvcktr44ECFEaPm8cRimW5AY2fZq6sGk3WIAYtNlXGbuWk8SSBnymLHKY3tLVu2bAvvG14wysyj7RW7lNO6nMiT9xAPveuuu35DbqDuAnDIvygKk9wxu3fvXoPXyLJ2UIH8YANdGu3VLajiL8SG2dnd93RmgIZeuHDh0y+99NJytIvTlISDbgqgMp500kn5r7766pfRXn1hGFVKRMt6oRbqhfSGz4SDiUEtXM6Lft98fumINYvXs8lAxwzE19i0CNPWch6VfMowHqcxWb1D21dBMSQxX4MY2CxwWkAzd71YdAVyMeboQpygUThQG1IjxgxFcLsK/vmzH0bf0YiIGUuA62zkWGaNzx8xfhScNP34aI6buw8WcUGAlRmt4KG1qaQGnZAlKxYxKpLpuKiwGBa8vgDqyAwJfgAF//rHCuq210XvFBWWYBp5knv79j1X/NiG6XsRGaAVazqGhxtnJN+PBYjpM09XRx03ITp2woLLIPzVAvDIhDxo+EC47OqZ8Nmv/yscc9LE2JyneUmukLg4GmRRuWoqUOmTvy2XMO3mbmrRP40pnrU7t8JAEL1rLM8cMeO+bKRUqjVLNg5d/MpKGkdpEDKCGHMeUw+PzTMW7HCIt9BYD++bEPwLaaoRPlvQG8Du+eefb9+7d2/DU089tWLJkiUvQtzPvPqqIPpUkuBjHVjnWnQlPYx+u4M+j+6gNqzpDOXHHXfcMffee+/3kUmU83V+JjRV8jVpumxtba1Fk+VNaBdfi5cOOtCZeuWhv/FjqLbfkeSXC9fvpGvyOC12A0/yCUgtjv4Wz145dOM7mwc57sHBI3JCt7BqgRT3WQB25h5tpXKKsAzMmI5tRMtEMbiFVkDP9BhM8M5gPhGzIRxOqxFjh8P0i06H0eNHGl6WtsXcF6KqtTa3wp1f/x9It0e6JKtxXBtRK9FascqhwfPZcbyMNnYv7V4zhrD2dIdubtmrWtqb4YSTToATph4P4MGdy1ahrLngzQXwJoJcYX4xlBSVQl4qz5XHp/C6TcikaiyUsXbJx3G2wgCHB2UVZfrfbvqEin1y+9ay1hdmQnDJL/rSX+fA4vlLebk5JcuZYc8MAkm0iY4Er47+JHAwc+FCzc77iBn5iPaWzk9RB19BjLv20LGDdpx4zjEbsQlTJpoZkiaWs+VFnkMCDRw4sDLc9YAnlKNl51M33XTTI73BX4cKSP6bb75ZgSbXo3/5y19+o7CwcGBX/rkwDebL+P5/P/74468jr6MtOg4a2B3UqMtbb72VdhKH1atXawS7UnSGHq3NjgVKyegsCBvZ/MQmywcffPCeV155ZTGmVV9bW3vQA1CwXKkvfOELR02ePPkeHAClIciRL7Kuro53IZB1cwzVuFhoYMldCPie3FBy+fw1A9cvqx4CHk+2/A8gXgdSMWvP7JWgPPGafVnmYbcQBXggx92WAwJc2T2XlnhTSthKitxR9iPHDleXXn0RnI0gV9mv0gBcZ3647hE9l59fALsbdsPm9VukFqS8pJzJL/wmwpnj6s8rlYmTSDXAbxN/Lyz+2nVr4a23FkFhYVH0bFlZvNh7w65dsHTJMpjzyhz9zvLVqrioVJegNoemT+VzYHDomgXkuMzmhKMoTCp+mFz0KbFg444Zo4476RjoCuS6amMlilhcUgxHHTs+0r7XrVyvmptbuP94fcH3y3nHRkWNhR4VK3pKeTM5bFcy38wFkhpTqBDpRAGjPDjGKg5iiQEzTkQJLV4Z/ZcWV+hoS6cHjujXaDqNBeXoLecGlQAq/XreMe16QMe0vQ0/zCCBlqjpKBQ/9bvf/U6sNHBwaN26denx48d3oEbXXlVV1TBlypRTQYyLQDgHyOTPkXy6aNGiJ+64446XGhoaiNcdVADvLq9414gaDJ2WfRobG0f/5Cc/+eiJJ554IZUrm1QkJQl6ffHixU/+27/922/wg1Sjqky+uYPaSaiI//u//zsY/XI0+XJUGHzS2eaxTFJ7C5f1MhqedoEn5JOLzJUawO5yqlxaRuNyOMbWS+msMDYlbWLYrVXIXgtYrIEErVyW8SNp7VZ+smna92KNUeQaaYR9+papC993DkxAJhmr72lrKjtQRHxt2cIV8NC9jwCai0xxrGQg6ikxz+CC5Oem3eIOGJfWJJDRX9FUqlvbW1RLSzO0tDXTRHAdmU9JScbvWoDgW4zgVlRQDIUFRSS0qbDMztJswS78Gu55lbCpAUsgAhvaOtrgnz//ERhz5BEHrI2V/NdoeBS08vIzc4MozYhfWi1N+9qZ11+sQGJfjVHJ1MZ8M2VmNLhnuN2MDqdTPF8vLLNMV06H4fKZsoydPGrLxFPG1bDfXGzt42l36WAT12yUtHkrLZmFPxt+//vfX/zpT3+afHoHO8Yg2k2mvr5++J133vnhadOm0cpVKWmSTdLomC+jyfJvn/vc536HWt166AWBgQcd6Azlo6+uHzpuj0Cwu3Lq1KkXgCmbbEz5i37OvQ8//PBDd99993PYmBshNlke9M6Bf0UIZN+uqKj4OIGc7ATkmF6/fv3mxBdV5+tWmmNltLmIR9MOBGve3uhFV0ZHDFaaJ2o78PPMlbbMbGpksJQsQUTEcV2UAQLtmKvlP9pigcnHvG+kbWXWoaQyFRblqZOnnxhNFSguKbI+we4y33R7Gs1lu6F1b6uZ44UdqSgfyvqUommu1G9f/K++bhfcefNPImCxCoEruMcJuyiBBzb84fhEcPWoyumOdLTaCQGfTneYSJgUrZQP+XkFkQboTI6GSbOK0YMRavoQhCqGqY0VYVraWuAzN30Sho4cnFHPPbubYE/DXmhrjgPk8vLzsD1LovZM5acs0nZaDgl4eEjmzJefnotAnpehAIhz289Yy4r6MWG/B4bgVFM/V7aFWwXS03BFqZUVwqR2CR7Axp8RLAiOnTxy61Enj60BodlIoDPniTuWJ/jdUxSJSRGZ8jkyYaI/71cIMP8FvWNNzDxUIPog2I24/fbbLznjjDNmojbaL5upkn7RfdQ0Z86cZ9EM+ygeb0BevgNB76CvTNVbgI6osKysrC+C1pDTTjtt4mc+85mZw4YNG4PXquRD1JALFiyYc9dddz2HoLEOO8vWCRMmNPSCxoz47ObNm2+orKy8OVzeSy7tlc3eLQdJ0hQC1ubwUC97fdVgmvtjbgkM0YH2oUP+zRzecD8tpGMQt1iqZX+dDhIxYJYWojNYLUgCKuMf36SJf1Ek5WXXXAxVfSsswHVXh2traYO6rfWwc3s96A4d+AJjKigqgEEj+kPVgEp7rX77LvjB138c+cHcKhxaW0uWaUlZdPcT6LSZ15LJa3ztbGvgzc/yNDXrW3OqSWf5yHl2ypr8TTijp97E9VXNrU3wpds+B5X9XdvUbd0JNZu2A4Fy0kcoQJ5cVlECg4b3j9q2O6TA2R4j/93Tc+Dt+csEBqd8APMAD9iEaA0VFhSNOUGaL51507+nuD2lwcM1t1wx2tcUlQNEXs5s7OQjNk88eWyt2ZWAwckDMrkAdGKbmLFOE6oJ7OQi0HSPNLtdu3Z9E3nfTyE29x1UsCN/HfLbPlimIeeff/6ka6655jw0ax5dWlrKvkYGuOYVK1Ys+NWvfvXCSy+9tBIvbUVX0g5aYgwOPmD3KqAjKqDNDJubm/tjZyHJoc9ll102Ck2btNq+woasmzdv3lbsEPXYsLQ0PNmzaXO/g94haCXwj370o0ddcMEFf8GyV0mQo7lytEN6ezzDW2dT+bWYI8fLDplrFrzoudVvbei/Yv6aESL7eNQyA4hBww1ozeYY7RgqmxHtnFlpdvTkXx0vE2Wup6111Klslic7JuVKpljHi8LQ+1T1gQveNyPy5USl1Gkvt84+4l7UNmqqt0caR3epamAlDBk1CBlQCjZt2Ao/++97oaSwlJmfFf9l0IY78QEoOIZs11ifCJL03/HskpnaBPgAJpPtkmLrW5CpipVE6lNNLXvhy9/+fAR0pBVv2VAD9f4mISIx5RTCWCKAygEV0BfbtbRPSXfKwplHVV70Opozn54nzJmBtpacraegWgXNSlQOnPhY+VodSxAgZBT/sl9ib3UXcPECMHnahPUjjor2tbR50P6OciyzZsfzXlVCwBn9IsYV0MRqOcfOBKfUP//885fMnz9/BYX8w8Encr+U0gatKGz3Q95bedZZZw0+6qij+hu+vGP27NnbELx3Gb5MPjmKJu8VIEfU24AuAoxZs2YVoOmvFJ2YNJJoLcx8NPtpbOg27ATN6NTdi9JCEz7b3hs6An3sIUOGlK5evfoVSPDL0X5NtCRQV+nISEt5XfrlaIHm155ZeCSrXaYA4NBHgIbjFD6z1Jmak/YiMcW0A5GY5S3+y0Zf0D44au1kbB2Hs5981vEw/aIzoKi4ENKaNTh/9ZCkUUHmtFoCuN1NwMDdEyKz25ijR8Lrs9+Ex/7wVOQXk+Yr2wAC0ATQxXWUmrASxyDOvLSUSqiQPLOWNXBmS8Gd3bwRb1azMItCljIGg9o1rSlpU0sTvO+jF8NJZ54IG97ZFO1+nok0QWkhULywKMVlxdB/SF/UmisgG7lva6qG5sxdO3ehOXMuLHljudmhPJUhIJnAEmvajJs91gC5jypbKGFeN0HD7LxLKXNRJfn8lZcXH7u6Bv5Dk+XJFx73zsDh/fayZkckzZj82WTUdDZCl00pam+D5DXenfy3v/3tlbW1tTW9BOyoEgV9+/Yt3rlzJ/kFiC9Hy4Qhb25Hk2ZzYWHhXrzf9PGPf7y1l5TZUq8DOkHUsClUk/NWrVoViX4IbhQJlKZG7EUNqUaPHl00d+7cRL8cTyPoMhFjxpLz5NjdwzyvaXdz3uxH50+kHZNBBolokLinrRoVk7VNApu0xMC2BkwuB52JABNJOgzLsNeBGQ1kcHa8V15Vpi6/eiaMGjsihjYLcqL+mck6DW73XvcUl0EnakpZadgRQ+CRhx6DdSs2agQ65U2FkEKDbRGvWN2huJ1DUyOLDMKPZx5x/N/7eDra001rL4Q2SkE5W6cPsUE5QNRFBZogpdrW3gqDRvWHq679EGyrrhWvqkDw8DQgP3nlOl8hmjUHokmzLwKe6JIZZLU7o+FRsMrsZ17Vu3c1yqBFD/Sc8hZrf2xtZFu9SN0KDVZck1ogxFYNZUOI+WpGAIyvKyqOVHHAml+Y33Hm5VOXF5cXddhHINNnJ6kzsKNVRPr161cly8D+OvSL/RdtkgrQU/HuXaNoxRiItbzo2PBltqr1KoBj6s1Ad6hQ3vLlyz+A9vZfhH45GWGpEiZYSlNlOFcusPNr2jSV9pNr2dNa4Em/OgYTg2JRWHngA7TaldaBpqZZpXBSsr2vXfLRfQF+MZNhAA7n0EWvx2CLD4+bNBou/8gl0RqKUouLcgPwGCMXuhGBrba6zmlwXqOZX+WDXkbbimOqfHNTMzzwm/+DCnT55uflW2FACWWpu5wkiIYUZjY/xNF8CCVrqEF7JkklpRMAOTUPpE6TUXvWAl30Z0ZThO1qQEC3d7Sr3U0N8JFrr4qmBIQ17zZTUH6uBHjkw6tM0PAyy6aMdteApkz03b2xDFIqBAM5z47rkrnkmLLIq63HTernzg0XfS1T7NA3yCZPbnVl+zlft1oddp2SsqLWUy6esrqkvLgdzPdIAjppxgzvyXE6fPjwQWVlZTaCiv1177zzztXHH3/8c3ipV6zbe6hSr9jm/FAl6qhnn332kRMnTvwJHleFwSe0ULNhRgw+4Z/VSkLNRO563NbSoeY8/saElr20n5xSLqoSItww5hxlx7Vkb8wDzYCFGA/lA5KvmfuWTyjltEOpXSgDcIbh2tc5XZVfVKBnXHKGuvD950BeQapTLY5/SYPbtGYr1G6qg7bWNshgudaKpBwGhOxDPMKxDMRAn33meWhtboPCgkKOaNRB4W0ukI3Xs7amzZkRHzSzT+N0AvdtlW0TpQTjjW4pBkFu6+hYaH7glAVZPwVupl1iOb0PqlQIdrba1dXV+uhJExWA9t9JTFYJzA0wwpzTXnwNOxthb0NTZC6miE0I3gh/Kdr2qMlHojm7CDat3xKlIVEMzPdgHx+IqEqwJvKUiSoW/dq8yYEoygSoKP4+Kl6uzgSj2PeU/Yys0HnWTGMRxfHd1p6PboSyYWOH7MzLT8nxDQb0bAAujWOz80jG+GdC7a0JLUJlwl8X3UdN71Q0bT5y6qmn7nnhhRe6K4vlKCAFOdonMvyoqK6u7ke0U7j0y3HwSbYIy2yrnZh3rYXK7Hrc8eZzb4/YsrZ2AHN1njYQL3Cb9pxNuvNCgxfaoCEMkeB/fC1Be/XmBDRApt+D7g8Y0h+u/OT7obJvnwwtLokoipICIhp37rEYkln24Fw6VmxBmWfZakSMZv6r82HxoqVQUVpB4fxCmYqfpAY3m9gCsAYcZK2k/qg5ulEbr1lyyxvrozV5aa2DSW4Ogyxigsd4tcqYO+fkEOkqNA85rdDPA0DUl45pJ/TdexrgmOMnwSnTTjZBQXZqg+0L9JOyJmLlF1t11ttUZMocGERpqsRCqUgYIe3utz/9P2jctVcspOxpXnIPO62c8MCwBsrT9sDPN5AarJYW8EG+7j6fSdkzfcb9f+iYQXUnmNVTWEZRZpJ4OMa7WjkFfVx5o0aNGs5gxyZMlJmfPumkkz6OJswWyNE+UU6j20e69dZbaYmva1EK+wJ2Zm8TRQS/nSShATBDtJKeFdh5KkGSj0maLWm7nY0rtwwCFvot/vB+KMAXkkizw80xDB6kEZixIGykXLBiczJrMJu2geCyfrnhpLOOh8s+MjOay6btQsHJRBF/27fsgE1rt0Lz3hboUu7KclsJXVZchNbWVpg7ey4sXbwMykv76IK8AsVx4Q69tBIxHvH3MbwUDGiYx5UxrTGwKQgayY+WBAYM5VQCupXipjTc0zpizUNmroNynQdMc7N92p4bpVKZVT8sQmaGEYaqYVQO0jSwD9OKHXrwkMEqPz8PXLquiKISkGEcDWBYEn3Tum07ozTkvMbwUU6CzKhTTplMoepq04bNyi+0M6sbNUtxc1mlz0ta+EBFPRislNMVE4rEE9rt29Yn6rv9lDarp+iBI/rtEQCmlPCt03lXIEeEAjBVLl2K5PJA60h+/tiLL774naVLl66kVUsgRz2mHNDtG6Wee+65I8eNG/cDMllqs2wZ0a5duxqC4BMJdh7gJZkrRRgybFlTW7789VWjAJQNInGUGSwCkDRiRXSa4aU85w4AEsxfVtsR6WsvKk1bKVhZQCST0/mXz4jWqCSTVVcTv/eiH279ymrYTVpcOuk5lXCsgmMukAaLDvjX2tIKi99arP/2zHNq+7Y6KCvpA4X5hYoWS+Y21+BtWsrpMIjZeglmHnnxUoLVOT7JRVECnJzOEreejK4Ei0k2H8YpqaYZ1VFZ5ZBLan2EDHoKMjmxs4JG2WtrA1QueEKhvxLQjwxLlixR5GOrqCKtNx+SuoaSpsukTxJ8L36ffK27tu+K+kVxaRFk5fQQzUODcRPHoE+3CFYvXyv9dq6txL8+TMkSK3vKmOau2sJ74BlUwCK74vgZJ2WIx0DtrGkoL6so21vRvzzSuNiMye1v/HOK18uUwm9ItHEptkGquLi4SGbSt2/fsxobGx96+umn90AXhpscZZKCHPWIiOOMGTOm+I033sgwWZJfjkyW6bhHZ5XeBNBpnifHdny6T8d7djXlvfL4/KPaWzvytVhRxBiorFM8viV6fuC70sLMwlMIAJR33Zmp5ILOrAVql2wcVKjC9uhTVQ5XfPJ9MHjoQLMSPkBSgANdIS2ueu0WBLjG4G78lnSBQZiCNehpB3AOiBDgWmDBmwuBtshRqBQXF5VAcWEpgVyo5XAGRoBQPEXCQiYDiTJQg/XiqErwNRynIoM//80cp6L5g1ZLNEEqcY0Ue/mctu9UEAAZwenA3Mw4AE+TYg2Cj/2aOilFWE/jcmPZaEmw5pamaH4dBQ0NGTYETjv9NEBrha2i1O5AljHjO6sEAcf1UJrA39mkc2tWwDLWbK6FWf/7KJoyG02fV9y8XokY07Kih8oAO4tWQk4yeUCGrBgvVUbPpIzwkZlNfkF+xxnvO2l5SXlRhxEmou+UtExYZ/Pr6BjvqyOOOGI4TyZnEyZaKJ458cQTP7527drmhP6co04op9H1kNB8kPeHP/zhY5WVlf8RmiyNX44XL1Vsq+djY6rkCeC2YxvQs9Ie+qzUnL+8OaGtqa2AR6LhdjxkFci5Q3J8CxOTvaF9mVcwIsEdYv+GYFEuVN5d9GRZskwOGNJPXf3pD0H/gf3Edi/JRKtvbFy12Zgpu0tGuNbZtb7qjdXw4gsvwnN/fx52bt8JJYVlUFZcjkBXGq1rmfLtTURuLoTiAIFYZfJ1ghgB3cRypZ1CxHPuM9o+fkC5+CDl5WOZuYFsC25Gy3avaWn3FOBknnFSC9dJKafBufLEv5axe58wOqcNXwvzi3RRYZFKd2jYuaNevzn/TbWroZ5W3IeiomJfmwvNl7IUkPSVnHZI354mi7N2l/lsXE3KoayiPFr/dPlbK1CIaTMfR0wOt8JYynoQpUvUJhdCl5L1sPXSQrPzxhTnGwRgaSeqxDuHb1tfUzVywvDtqbx4nIeRlgR69DILtoEgbAGPwBDNyc0UnKJcv6HVVMacd955bw4bNmwt5LS6HlEO6HpGqc985jNDTj/99B+HJks0V+4wfjlJlrkZcJO7gystFonlIBQaB8teXT1kx5adlTwWOaoyeivWBVjl4jyMdC4W3JDSacwafUC0apNRVFhA1sqqeqkUy8KZphZ6gTbd/MDHLoXS8lLobAkvCjbZ+M5m2Flbb8yUXCwlipjEKR1o+5fj96o3boRnnvl7tMVNS1OrriirVGim1KjJoV+jQOfRIsm2nkEGMXY5jc6oCQJ4ZJmUqZyHIyYhYzn01alYOwPDVeUUAAsMivNy2qN9IeahAhy9WjhOrcKrVmtRygXVxMeQ0QYC/NiMSbs8FBYU0Z/aWbcT3nzjTV1fX68I8Jw1LQuppEuZFnbaBJdM1tQvShDswuhM+bEoKnPKKcdC7bbtsAP7j/Sb2cncyup09iizNG48KJWUm/D7gZgkDraJRLSzMmPDV57b2zry2lrb1eBRAxo4OAWEQCHdFdJWGpgyIz6AxqFIakR3XYkoLPTv3//U0aNH//mJJ57oDQvYHzKk4N0j9Y1vfEOdeeaZfU855ZTT8ANHC+shQ9+IZr8ls2fP3nnLLbdk3cCvF5IaP3584csvv/ydPn36fEKaLBHg9tJUgk5fVv5ec0xy92IVL+/Vb+Uba0bwVjeWw0KmUpPZcCb2RJv5QPKOFqZKyUu0/V8yVKs5uFBDp0Gm0x3qzAunwVkXnhZPjYDs/jgyUVKwCZksg2nprm1AJb8flUJxBczDKtLgXp37mq7ZWkPmSVVcUBLtBEBMOmWlbZuRaAKdafBxJlBbZ5k9SICT5bA8Ubv0/Ty1lfdFkp5/FGxRGfDsdVEy5trWeGlyyQRv97J9HzLBzSmomfetuENHtBA17b5AJk0ybR551Hg49bRpUFnZJ2gLyEQor0zO1BhStCbp8P52dRXlFcS8bQQbWivzlb/PizTQIAextqWdOO580/aZwMxvrseGlBjAlJU3/EqZjxFOUvdNn4YmTB1XPe64kXXabTmWdY5dSCpYIpDWw+RtfdiEuXv37v897bTT/gstSAd9Q9PuEtXlqquuSt14442VyEcno9tnJF1Hc2z1okWL3iY8QLyIpeV3gd4NoFMzZszIe+CBB85E896N+GFO0wkh9i0tLX/csGHDD/70pz+t7W3LxSQRlpFWaTnmAx/4wAty9RPyy23cuHFLW1tbp/sthVMJGNw4wpLaZO/u5rxXHp0/EaVCHsmO+VpNLrospYP4mdiOFg9ysR+cRSfZf4Rvy+yIA6D89wBAmFbcddpm5swLpkVBJ52BHAFbzeY6NFfusNey+d8ygM5yOQFyyCwadjXAq/NehZXL34HSonIoQZNaYWFxFLDAQQtSsdIZkkE2dusDo2SyZpKcKLYOgQF0kCTXx6uXBnC+JYBQg814PmiNqBMo38mW9Bz44kEyWZ8kOLAOfI7Oj5yO5ra1drRGPrzm1iaNgKdOnXYqVJIPTyiznDvXM7M+KiwmcNPTUmKDhg1I3CFB+u1eevoVmP23V2lzWlEdqwwJf1p8DvLbOB3K9mc2Q3qaogHKTM3OmUUDwNOyGOSvO5P8dX2KO7S/nq0HeOyrE/czzsP1MJWZSL5w4cJL77777td6w0atXREt63jzzTePHjNmzK1Y9tPwkreigNFgn1mxYsU3br/99rVYJ38B3ANABxTo6CNNnjy5ALWeb6EU8kmyW7N5zss0NtFF0klTU9Nd/fr1+x4+09FbtTsjYZU0NjbOweMj5MTwbdu2bd+1a1cUWaFU9t12+ViuYyl8ddH6ds8+OGdSs7fyiRaYpj1OFJdLDDgda3PxQLeBJVH2AYh4fjc/8CTIQXt6l6aV7S/5yPlqysmTzdQBSAS55r3NsAFNlWSaEq3gVEjB6BIBLmDZHGSy+K230R6UUiVFZboITWsURckM0KWhAxbqYZsBrMQgIRfX6tQuBjhWlJSzLIIHpFaNcPUxpefP4/BJ+w1rTVcyklKWlwP+OIZFSTUjs/XsuUoY36yy2XJw/nJJTQGWzMHxe0fBUrRrOml3exH0pp5yIpyGGp6WrReWQlA2QYeJtLsxE0dCIf6G8Bj/RiH68OpLb8Czj73ogZ1pFR22itc3EsvFmp8H9tZEqfwVVJwIpjLzkOOxvKp872n/dMKq/MI8+4wJOEsZXx37VL31MJPArgxJrodJvAIF63nIaz+ElqSmXmwVo3rk1dTUfAatYDd3Bw/QOnb3gAED7sBn2g5kvfLhAJEBgwJk+j9Ep+mViNB5SZVi4g9aXFz8RfRvqZNOOul7pnLQy4jKlv/OO+9cg2UbKee40RJfDHJESZFUphNb3xwzR2Gvj/zTy19bPbh5T0uh8wFZidhoGd6WAc5Oo11ECsTSLPubAKTmZzmMtjHSUf7R+NbWSeciPOUI16qjo03904cvAgK5MOhE8rfttN3L5u2RRuffk9qUDhEkaHGwmsGm6k3w92eeRdBsRy2uTBWhBpefoj3cqHv526ForQNEs6mZTP0lYcBnffY5AXIWiY2PhqMzvTJrX2tmgDMzjv28LOAJTUibb6JEEIo5jxCIdXWbBggG7hBUcR3N5/dRy1bSfRHFmp2O1XtGc9kYDMIUPZqfn9J5+fmqML8I8DvoJQuWqhXLVsIpp54Ek445JhJ+OheduU8nfvVIMFr99jo0ZQ6INLyw/Jr2hMKmOnX61Mi398SDzyDY5Zs+bT+TSNEMD14BxQSQgOjaylk+IMNMouxY0SCETyFbmjayx3Yj2cb6xtLl89cMnnz6kVvj6zSGnJArxz/9I+bVhn1a0YLw5B7hJcLoGpr+Tpk3b96nzznnnB9DL1wejJWe559//j/Ly8u/0B08ICBEBemLyFNHHHnkkV+AA7gn3wEJRjFjrQCR+ysIXNdTNKLRejrr9srYsFVhYeG0iy++eOUHP/jBd3rhhEh1//330zJf38djG4BCJktaxzKdubyJp7GZ7XYskzO/nuRdt3ln6dtzVh7B5yDNj8om6pivY0cZZsnAjSDYrOJ1kEz0iVhlArRnh3H50WFa5RcWwCf+45poflM6YRI4v7t1Q220fFc4L451IJWlOyhTJX6Yznc3NMITj/8FFr65CArzi3V5cbmi6QJmjpcykjZL4zqBe1rGH585QVxzNo6stUu0s8HhMEDTNLwpt1ds4JyEpsq5W8BwfNXc4AeMzAIyaeXSk0CslGfBZISM0cvWycoLYMFRB0WU+ZhqalaRWYBivDXBMWhOQ00KfaIU8AMd7R2watVqvXPnThOwUuz0QSkJdZOoXo279kT74pVVloECKamA/chDhg+GoyaPhyULlkUb2zqSe9PZNlaiSbhrB6Vin7hsNTCypEVQBZ4vV2VodnLwNdTtLu83uLKB18Oka0ab83KWy4WJfiLlk2iJMNoEVTmhBhD4pmC7zzrzzDMbe9nyYOqJJ57If/TRRz/Wt2/fr5Orp5t4EP2huXbSRz7ykb1PP/30m7W1tQfENNv1vu/dIBL3HnnkkSMJucOFjbsifn7o0KF3fOhDHxpEvjDoPUQfpvC44477V+yMI2S96urq6mmJr85epg4cmCVkZ47+9jY25781e8UR7i23gLIWGKY9wVwx+3LcJE5RSz5tr0e/Gsw0BcWBLs70Fgd1au81upZWZE762A1Xof9koNXkZOMQtaIkvubt9cYfZ1iy8ovge/P8/q7tOzEYLnhzATz04EMUhq4ry/tCeUmfSIMgPxxPnI7L7kvFcQrxnydux/WX6G9VL/Eez1KMH9GhfyaOmmNuxgkp77v4FKOxBfgkad5q1VHa2rJOzih+BII4T62TAB08tYNBCjx1MgJuozE6IchUD/xEXaGNWVML8KM+jebj6Nv07dNPVa/fhN9sFix4YyFEq79YmAZXKtsWEocym46eIcvAauxT1LfEd7ESCPVF6pPXfuZKMnlqEPqYDnyzkU7sXdOmGey3tU2nwQ8v0qwt2kJYYQTATYk0w0uDfw6w6OVlozva0gAQtK8ROnjfSVFWaxWSpjty7WzdunU7nxszYOU111xz/e9+97touxzoJURBiGvWrCnt37//fwiQ6xbpePpVCgHyP66++urBcIAw6kBodBEY/PSnP/0mfrRjzNyyHpH5qEXDhw/fedttt72OmlKv0OqME/WoKVOm3M32ZbpOJkta5ss8ltjBeO1EnjrA1wn4tJgzt2TOO8Pqaxr6QAafsT8xbxFyvmU4gpNZ/4C2WqDyU8ucs+MEeW9bH0NaFRQW6mv//SolQU5ydfqN/HErN0FLcytkIwXM4lQnz6AWt6sBnnjiSb1qxWpFwSY0F8744mSWUeEsniXkZUTioJJOQuZmkyCgBSQm+PA4DbCAopRc2Sa6E4Iamy+lBC8ZLvtpwsKba6zhufzFseJc42y4fPJ5Z9LOqIzSGWnGebMGJH2KUuNT8ivSEQEeT0sgHxpaZGD9hg0wfMSwaP4deKX3YDcoUyZ1tLVHc+4q+pZDvDwZhE0VzbUbP/EIteRN0uy0HRoq7GyubSUEiy5ieqm1coKOV8HRtt7+iJJeBNc9ZG3oHEEuhWCdGjxqwG4zYdxqLpQ88RXkm/bTGb5hv0P8E+fV2traXlpaWky7k3NGqNWdPGLEiMfQTLi9t2h1yB/z//KXv1xbWVn5of3Ag0I0X7ajAjW3vr5+v02z+42WhN6oUpdg40/rCXKHRJVD++zpb7zxRnE2O+57TGru3LmF5557rqelkqkS1el60VljlcItxGxXP6Bfub8cH/Oz65dtqtqydlt/K6c6BYXVNAVugixPkIuBCZzkGJfWXEtoOed/C/GMxVRl8lRWMu5ApnHtv1+pBg0dmOGT49/62gZYt7w6kro7I5bCkwJXGByWLlmGGsEfYfeO3Yq0uNLiMigsKDBtpQPu6Jt+We9h56ay1dZOs/M1OlGuzF8Dg1rglU0RWFuSKGdkDnOdX4rLYkDD0ypccq5MsfanXTa2QCqpiAaNrDanWCdl1SIT5Gz6QZpxusazK6wN3rv8mvmK2vW1WGCj1WdIMKnq0xd27WiAx/78OCxbuizW7kCxNmT6QHZ+rIJMW43fjnZF0BkF0pFfcOCwQXAtWh060u1ZsF3bLHVi1m5KgQbu6TxYFB+K7ssaYDxZnbtEmCj77Tau3DKwtrqu1EUTxQKwESY08wwTkGH5g9Tu+Ji0OnaXsPYzc+bM7yEfLgaAXsE3kYcX9uvX78L94eNUrwEDBvwzglzxgbDyHQigy0NAuIpMe0kVo49CO4KTFkR/zUgJfq3oo6G0chQeFt56660H/YOhNpf6/e9/fwJKTB+QAI428Z3kn5PPKn/5Hs0mS14ZITRDEO3Z1ZS/+q31Q0Uq4DNwFSCZGXz8rJYKhiB+RJt3TUAfD173tLbPOp5N+SMgp9vhnz5yQSLIMZEvjpbyIh9NZxSCinLcJDpuaWmFl1+cDbNfeEWXFJTqPqWVurigGLWEPBlbIpOQ7SG0DQXGvKYMqHTah3RCOVWgvdhHBajFza4AXNUUB5PEjMu2p2lg88WEudPCBoOK0BREP7HKntSGzVG8fJxI2IPGqCF0WF2lE7V6cIosRC2qtNmdQZiF42e0cfOC9poHjFYTmzNLoKK0ElLpfHj5hVfg5ZdejtYeFT6vhCJkIrl8iiaY007o1OcyO0QMdmR1uPTDFxmwk6Zh32oZ+3Z15rgxwOWpxPGnZO0wciU4C7Gsf7xNUGyG9oWJ+JpWb7+yclRbSzt/fc2WHfDq2WGD1lRCxCE939bW1k6bOctrqGSc+tprr00nngUHn6hORcj7suIBYUBXeEBEptmHH354+uOPP77flsf9irqkigwZMqRw0KBBHwwrRRWgxY1pKZukd1GtLUcbbhWv50ZEWg+CXSEcfFKzZs0quu+++74rTZYEcGiy3C0fzKbVEbEG51iSva/Xvr2hP00l8FhonLX2AI83KdByaLlBHEdaKhFW4KRTByisXoDFBqv8aCmdxkzlvMvPToyuZCKGU7Npu2yuoA5e9h7ZwDeUsXY37IY//fFh6GhNQ2V5laIVOThkXICc4hcF8rNqqrxcjYRs1CgAZYUFWcBEtSa4lmG+NAhoWtBFsXNkJVsR2eSnmWlqUW+IGb02blTLQ2P+yJGX0kfjFHnXfqzex8VhUNUi0EJqoa5a3jdQrlnNw8phpejPGnxU185fF1fAYpcJ5sB7BQVFJOyhoJcPK5eshtWr1sCHrvgglPcpB1/x8XuHgsz+Iu9xn6Otf2QKVBrqq8edfEyUfhyNyf5c+9nA9XsGPOUXRLvSmVEXPZDW3B5auad1xqjibsn+BWd7BGja21K0fP6aIceeMWGLdhPJdWjaJuFY+vWTwAKBrqFPnz7lRUVFhazVjR8//j9eeumll/F8rzqI0w0QbIl3FmL5+8iyE++sqanZQXjAawHTdX6mvLy8FHGkH+MBa7HoNroBNcTn8Lh9f+q1XxIAaV7f+973xhUXF58sK0XLYW3YsGGrBLmwkBSWjw7LapZOxPuKVlKHg0g04R19DR/BTjdJ1ovqRL/GtyL4K4NER+IcEfNM9BxNvm3Z05q3YcXmwXasyHhnyXkFojGO8T02AllzVMA/rERr/uXYDceMLYLYaPq07oAzLjgFTj37pIzAEybaGNUHOVfY8ErSR3SmyqUw68E/6hSa8CvLKqGkqFTTXnFZEjTJOV4M4VGUuInnkOZKrT0wzAC0+DnboHE7WfeW4/pWuQHDELUFOZOi1toKptopdiB1p0wFHLQNWrF6E5c5VEeANQt20Wohy9giKu0JHMm+UQ94+U1twdP5kRxbz0jBHrHQZNtHq7xUPpQUFkNFeQWojjx46P/+qBcuWBQJOMk9I/ODu/K781rse9s21Ag10/XxCOxOmgxnXnAqanZpv7ZeLZT2z73k4k+uvRoqv4CR0iuKa63lkfXXdTbtNEr827hi86CajdvLIKk5A2JTZrb76D6xKzFoM90A/VnT8Z3esKyjhyu0owvxepomIc2u8pk9SGvXrt0YaquELZ/73OcGK6X2C6v262U0WxaeffbZV0ithyZQk8QRPquzTKSmoA6uHNaVltHSxxxzTJcd4V0khU7dEooYCgNQSCqRNvPoYQN6SZ2SBBdew9KsiEArHaTn/uXNIw2rVeH8uIi0/d9DNxPZH90ynFA63TxkU3HZrNwej8t0xLecfcbej0b+GedPg7Nnnpk1upJArn77LuhmM2aMZo64ewlNlS+/MBuK8ksURe2RJhdxFzcvzuG+ERC047eSbydzTCX4klIZIYoqfFIpVzjgVzWwAudnGGtcUsVjnYxfpXpofk1ZNNJ+1lr8o2MbVyygsObP/QpMBKaHA2wuVSwU2BhNcOHrRuDJBnxW/JFpK9dBrGZp8xRtwyqM114+EW+ib9untAKK8Vu/Nvd1eHXea6Kp/c+X9DF10A/pjCIyq9dszbjOYDf9ojMisNO6Axyoeama4QPAzSdB0H5yHb6r42vCAqK19Wtrv887LVCLgOMV89cOpZVN6Plw2hETaXOs2UmrnuQzpEQQgJj3I62O5p6hX6ukK7P9e0DkroqWRCTejppcHR2HPFKWk3kqWQEJQ/ga1evGG2/8OJ7ma73vsLBfwSP4U1xVVfUBLjBVSq4Sku1dqbbSH4EdNsyeRYsWPYMfuA0BFA4WTZ06NX/ZsmVXq3hyuJ0zhx9gJ5eZn5Wgx9ez7RpOnZaeX/bqqsHNaMaQQ1hiGdgdjWOTJAeoGEucAgOKjs/YQecYLZtc4gWUNRu7lDUxgSfhUqZjjx4TLeslzZX819GejqYPZAc5lXDOfN39kT/u4T/+Gd5ZtkpXlffVpcWlZl5cSnutYF7WVhYGyUe1YPBgOZbTfkzTJHqDPAB1KWoQvtA4b6M5xaK70LCA7dBGGzIlN20NwoxtS2J4YDYtDewHip/m9z0mqM30A24HFc8F04a7Op+d9RXZimtf+dLaj6pgjdddA4deYM2UHilwYBg3tYuBEUnH5SSmTZP9I9/d2wuXwJNPPKUjv51MD6z4lkiyRxFRX1yFfTJeQ9UHO23AbtKJE4HWZY3LqGStwHyTBJKP8ViXSr1gzmmIV07Rzr+nEpKzs0yA1n7dU7bstVWDo1vaBilZgZjBjX38cgcEyWeIiCexhkS8irSfuXPnfvhga3VohuxYtWrVHNTgdhNvFxYKTzng58PjhoaG3RLEBw8efC0eFiul9hnA9xnoaLWQ559//kzUUIZTYQwY1HNhZaVAVEIFc0T4F1XxrU8++eR8/Fhk7tRwEIjKhepzyfDhwz8rO1R9fX1DuJalrCMRr2wgziOGI3Yl0Ht27S1Ak+VAj6/6ZhHjp4kOtRtUPM6k8BD48rxEwNjIuIyO6wG7VQxnoMdKK4rU5VdfbG0ssvGJkaxbvhF9DImuVi9fB2oSwuPj3bt2w4O//z9o2LEbaJeBooISFfvjMpQ4kQjrWxGnMuBnU1XKz9xquWGpREls0xttV/s2rPiO1/mUn5CZMmAZuwEVMwYZYz2M9pPjfEXRUn6kYyav9BEkFoeccMOAomRmVgM2gSVC1MmIvLdfnMsdTqmUGCMrarAtU9CWfTPOm751aUmZriir0ts21yjsC5p8tH51k4e9BED5BE1tWYt9k8FO1of+u/AD50H/If0iIYStBW6NGQUJZXf1lLWJW8QXVKyj0/VfZ0qO/hWFVlpmtH7Z5sHtrR1SUI6uM8+ga6zR2TIkgAPtSE68yWYTx0x8Hg8PmlZH61QiwLV885vf/MvOnTu3Jz0TAnbSPQniSBWvvPLKmbAfMSX7CnRqy5YtBRMnTrRBKDSBOulBBrUQGLT2lsvS6BOb+9Of/nQVOiQP2LIvPSUCb2zQj8jJ4QTg+MEiVUaaKXVyRBH/evdM59Ur3lg7uK21Pd5MMbqTHAqd5sguK1W66QbW12YBzA4tHYxRZaX7mHNp57rS1qRVXlmuP3bDR6CouBC0AMqoHllBrvtjiHwydbV18MjDj4HCJo0mf8fBCiKdIPAjZkBGSlZgPB1x40itzMtIOQ1EVDb4TobRC7B0c9EEk/LbSQiSGiR6gwEuFTtnKJm0HMTKTjInO5Uol3IqjDYqt1gdQJvv5knC0r+njEanXf0Moslm0UIT9aZDCDOwB2IyPyXnHfrjls/5PguskEzcfyPAU4UFhdgHKtBMkFKPPvyYbmzYY1VZ8H69NBIZAj3ZIsDOR+B01Kev/OT7sY+XcoPgP2lrIlEsidi+EmQqqgwsfNo/bSNtjcRkWtMtZq1lG/D0D7za3tae9/aclcNpbUfpw+d2lPyFLUHpuP9Y5YGPSbngKHDz3UasWLHiIwdLq6OCjR8/vuW5557bsmnTpjcggZd3ZsJkYhA32m5q7NixHxo2bNg+T4zfJ6CjuXNXX331wD59+pzLhUT/mscNQ1BIqgwPKPrgc+bMmY2XGiZNmnRQVuOW2ly4Aop8JhvAsTbHGpx4J/pt3t2cv3VdTX8eKGZoMcMz/zLQGLs+s16hQYB8j1c0ARPLZ/AgNnOaJ6JdkeOBqT28SOn2jg644hOXq8p+Fb4sanLxQS6b5B0yKOZ/0XRi2F67HR77cwxypcXl6LMpFKUD7wv4CRuAZoXFNRqYRuH2Vfy6AgjMZ8mkwTlpNMOHtut9iZrRpqQpLdQz/v7xN1Zg+JfrF6nQJ6gcxihgZLCABsCethi8pPnVJhP5dzUAe+sM8qsEhgFe8bm6PpLI++E1Ld0KpgxhPjE7F8FjYd5xUE4ACsDtk0d9AMpKyiOwm/V/f8Q+UieKmP37ZRTW/LFmp4NnqEyVfSvgyk+8H9rTHRBgM8jP7aQI2/QCzOXzsouY78hL3vEUF/G9BSMwF+I4pi1ra/rXVu8o5Wd5I1a5mwm/KqMwTb28Z3jFFO6HCAif69evX+nBWGWK+ucJJ5xAwNuAFr+/E28P7icqCUlxDhzrQc8T1nziE58YCPsIdPuE+mhmLPjOd75zJfrn/olAgQI10K7aKMvNf1ZihuRK0n00C9Z+6lOfuh8/6PalS5e2wkGgJ554ouCpp57i2fxRB2lFQsdonSw/iDoZScsb6MpI8ZJhoHm348WHX53Y0RbtYecCHj3SwhGgrYisNa+ewe2W0gLoFPMx7a1XHN0zjNlEMnjwktI03+iCy8+Go4490mp3kijwhNYcNGlBdlLBMbMsBcuWLIPn//4CFOWXQllxGRTkFYAPckoL9i8Zr3bXjJaimI3EbWUtdQmqhP1OrkTavStUZOVHsppi84H91vxH35L2cgWLlQa2qJGjib7E8yKfTbToNAit1AIZ2BqZ7OPIFmVNs6wgcQW1LZWOFw4AYOarXGcEX8JgkyWINnVan+T3KvkDCqajvKf9Z+P2zPwGStmIE1kGMwUBYlNmFEmOhVqwcCFt3qsGDRzkZSMqG/xmxpKilhQt/E2rqEBQ2PKKcigqKoQ1K9ebvedS3O+U/fBRUF/AgJX0RMafB5Ssk9y/zpaOfQOy/aRZhr8R7GloKhw5YegOAJDBbRbICNwYAAXT0WGT0Nw6uWIKhfafffbZb/zoRz9aezBWmUIeHpVx9uzZzQhO09EMWwaZn5HBTdZZyes0FqhetFUR1qlw1KhR61988cW39mX9y31BfIXMvwgdhNZsKQNQkpCZKQHkIvEJHahPYWXIPHhQQI6KQiuyDB069HOyjLRos30gmE5AvY9t6IHDOPqVEZdrl1T3bd7bVhByCqux+WYOFplBszxp/G3x/bSSgMKpgIj6i8thIyy1CHuP+KpGB/3UM4+HU7JMI6DFmf3Ak1CD8/N31+P6MMi9RJGVeSU0dQDy8wp5nEutTQVScsBcYwgHcNqcBtMWBhCM+srwwMIFl8ZTj6xczmqvZXfK5eqeiTO3AQNpZbQ3g7jxyhZR4WjOVjrtMgOae9VhrItxJKBJw3xOfsaaKCNJhWrD+5Wx8MEDXpohwdVVRdqECr+Ec8NpVnUVSBTXhl8L9SXTnCS0Otk6EvgkOGc0daZ27Y//fJqCUFSi0GcLLz33MjFIkJMJ2GKoReJ8XY4YTpT6LEVjShyPWyAdTZmZevoUYRLm72u6gnYmVoAgwyiTsN8aK0n0mPJUQ2Mcl/1a6XCQ4Vl9za4+W9fW9tFaa2c+tUKPt8pSaL4MiS1P/N3QMvb5DRs2ROHMcHCoFUFqF1rJ5mLZrYk2gY+qUEOV12S90P/4ATTV7pP5ssdAR7Pvf/CDH4wpKSk5SZsgFDlfLjTvZfswtgCo2r700ktvFRcXN+o4Hvg9J5o39/rrr5+JHWo4a3OkpaJC18LPJIC0t/KJ+fVMl+Y3vWrRumHKRrfx6ALjY3FpGmeAYTzRv8YXx28qwdWYAYMdQsz7Y2HDSK3aakXRfRwtqqyqFM6+6IzE7XZqNvmbpYrSBb/yupS1UwhyyxHkXqagE4h3HCjQbupANid0VB2VaXlUAchxRkoyB2W4lmQs8a8WsMx+lFgV0lKocBiQwUMVeEogm+LTTufSdiknZQMSorY2YMqD20xhBFEhMPnRvK90RywcOTB1EZwpT4DUTrqxvh+rMIIzULOQwIgMVhYxlnElscQqjt530d4vuJJ70o64r0CAX7iVUkjxfDsEu/IqTWAXLRuWIcQli3ZepQ0R2EU7aIBf3CgSc+bpUXCK2e4n/uy2XRmLPLcA1wLsOHRs2vUJiIQWe93INV7+kCmORBeXvbZqRHtrR0ryDO4D0ZvaKcxSoA6JeHBTU1Mzv0MRmI8//vh04m1wcKijqKhoz3e/+12KpHcTTLPgQTaTJk8w5zp97GMfG7QvK8D0+IVZs2blH3/88WfwHDNpsuwK1JgEqmtE6EVoMlyH2lRzNk3wXSaaN1c4bty4z0vfHK9nGUog4cu8piUv1krXeENVur5+2ea+tM8cWwctgAn/nOXOUqOI/1VCGGTtBxzo+e9wtGZclrTPtYzoWlCUDx/79zj4xOfpANuQQdRuSgyUCsiWAaTsHGtyDHJVUFxYEpmosjM7Azba2dm05+uJg3jcLeeP428TlUIlhcC7NvFxy5RfO/OnlkjqPFqJSepgWTIvhjIGKM0ba9JlYoA6bf2jKtbwtN3uKAbMaCVhZL+OQ9IKNcZnE0n1kcRE/cqyXqcFs3YJbkcCZT+J7SzaA3QLsmCkBr6f0IRxOyqh3XqanmgbnfEN+TxwH3pneSgIlRSWRoLRiwR2S3ywAwgBz2GOjRMR12lBAwI7+S49V1RcBFd98gOAJj6+quycR0hbgIsGZ7z0aDT+lI0d0ipTNzN9MK5o3OFU6McLBQhjwsXLTXuai9a8tX5AdDWB/3G7k/UojMIMnw21ugkTJnyOeBvAQdHqaOum5oULF26rr69fCQn9pSveys9wUAr9/du//duHCIOgh9RToKPCFA4fPvz9XDAsRGNSwcMPkVQpurZq1ao30Gy5+2AFoVBgza9//evxtLIAl4snh8uycnmlWYFILtQs6xgxqPY0oDY3NJbqjbKgeYCBU8QMQxdCsXa/0nclQ6LDBfSja0ICZKc4v6pQa6CVT6ZBVd9KCL1yu3c2dgPkwr7oS9ZLI3Ply1BZXqkZ5LKkE9dAsxkWvNrbpxi5tXVcaa6L9GVoVmASCmeQVGiFTrMGA7BKoKEXk2DzjPi6YjMif+tYgzPfjx6lnSowL2xnxdqdSVOPPnJUZD6b+aHzYMYlZ8K0c04GuhYBGLWDjtuQgz/jvNICYNIqmoYQq3oGYKPUVSiQSdUng4FwvJFyT2rujAqSrYXaPxe+v8QxblVdP2PxiUOmFoXTK1odpw+B3Qsv62xgp4OEk+EwXqZuV21DcFejD68PnHnRNBoLCoSay+Myahoz9UC0L8O91jpEOrMaSvS40mKAgjCLmqL69Y8vp/T65VsG0XQDWjUpumL8cgbgUhLg0m4DZxXyWNJ+iHfxfeJp6JKZDgdoq5t9oPby8vLdc+bMeVYGpUgTJZ+rTtxdHPVOx3379j1/wIABPQbvniJj6r777htLZkv6KLSepVzgWGcxWYZqqajoni984QsvYeH30vwLeI+JyjRmzJjCefPmeaugkDYnn5Mfhj8KTYLlSZ1yhwJOmp55Z+GGQS17WwsNrzV5KmfSNwMpygPiiXMAmffi9+xVYa1KmyATMlNS3vGv9haWjQV6YpSTpx4N04xfTsIc7ey8ae0WSCanArij8IkU1G2vg5eNJufmyGUjr5/ITGRb83UtC6GTtQ75jE0qthMq5fxcVj0BE9YqGlZThGXI8A0watPGdrVjE6mS4ktS07FFoqRPOO04uPiK81VxaXFSuaG+bhf8+TePw9p3NoBByyidVEpFOEf588acohXs7P+YD8fBClF9U8xDtdET/XbStr/ZiBWuq1mikeN+vJqoeF60lpuE2m/B9Qen/QmByyThfR/Rz+05aXb5qhT9uXRj3pzXYOCgQTBgYH9I8sdxojo4d+irYcuGbVBcWgRFZUWuJnjz1OknwfpVG2HNsnVxVC2PE23qCkGjGUtvvIJRvIaAsuNTSeeAjRSJ2krJ1cBiGSX+MLIaadXepvPeWbhu4MSTx9YQsIkISw/M8qKFzjN5LPNX+qXpBrQOprEGpIYNG3bliBEjXqyurm6C9546ECuIty+68MIL92D5KrTOjFxPwga+ruL5gkBmWfT5FZH58tprrx24adMmSrfbylGPNsQbP358/kknnXQ6gwIFoahOzI2doTT9bNmyZRH6wXbhhzgoc+eoFW+//fbx2DHen6TNyfIKkIuuMbiZlQzsfR78zbtb8res2dZPpGI0Ea1ALm7i7oIAuei+GyRmFPLAinmKjlZNjyHWXLR+I+UxEgQ52q15+swzjC/BB7l1Zh5SspDkng+1QA4CpIm/jz/yRARyvGalUp0JXEoClpOdDViYb6Ek89RaJzFPm2BYZGVMTrFJLrri7G2hHiz8ULap41S1TvvqjAnsMZO8tftPBPWwefKcS8+ED/zzpZAN5Iiq+lfCJ268Fs75p7PiNzUvNKCtH9IANheWIYk1M575zqBl8Tiqgm8PtzzWpsnTvkwrmvcyvo8MjCEyvmjb5+U9/0skXUowUxnzdmTGLCpVhfnF8PijT+jt0ZKOmXpbNmYhITHa9WDVpqiPe70YvxUtkFBWWUpfSim78okyZmAhcxtNj0EuE3PjsabN2FScDnAbS7JhQhlV2Lhiy6COtmgaQSQki6AkmwTPqYtSElqQsGxEuxtIrQ5523kIDIMP1obWqDS0LF++fNvatWtfBbAWAVv3UJvTQYAK/5KLjK9/9rOf/eDSpUt75HvsUeXRzFjAZktyEGKD7k1SoWWh5a+sHKmyc+fOpblzjaheHxSz5THHHJM/bdq0q0JtLmz84EN4aciVT0R99foV6Jujpb4Mr9bMca0kyKbMoFCW5ZjYLcF1wTnMTRr8vplfZbFBMG48pDlEZ144LZpTBAFYbXxns93FGTqRNZJgi7LcjS5a2nusIFWEPrlikpCN3yN7YsYvlWR+5EIIQVhbRhpaBmSSmXloxe9BHP9otDDpvgL2+ZhW01xZDtYwgSBkkoz8YzFjx8tpMQE81qqVg0u8R8B1zj9Nh+4SPX/i6VO0EEQiLZx9ZzqOcDAoRPlT0INZkFu7HRPc827FDWVWJ2Hgtxm4fuJ8dNppZcCT2QPNgigltFjFDMy1vfcNwNfmQIhw5seasOmeIrCj5eEKU8XwzFNPwx7k284v15kA5YjrRn17A/Zx/x5AUUkRXPaRi6GdNl50U0WwvAQmeZFgZIYsaNdQLoH4R4byaAC7R5bS1jzP1QJh1nTjn6m9rQ21uvU0T8xGbIe8RnXh0+L7vEKVaf/Kz3zmM59AoCuAg0CYbwe6pvYij3+TzZc6i+WPSPJeeUxYw0EpZL6sqanpkfmy20BHPR3NjIPIbEnne/bsyViJOixkZ+m1tLTUff/731+IhxQpdDB2FKddEkrkWp2szYXqNR+zQ1jazPm+BLym3c35m1dv668N09KsYhjNwukBSizPAMk447bRMXmZMWLAjs2YWjMIsE+Jy5YGMlmecMqxNlemrRtqOl3ai3Pi4rmrsemLmMgjDz+q022a5slpN4UgLnhCihLAPIaYkHX0yxqJ9k2DfksxuwnakCdgS/R3eaYFByOLXwp4dpanQcVljRl95JfTvEZJ5JOz31jHtj3qB6SlnXtp90GOaSaaOIeOGKxjja7DaggmbwvK9BeVN6ViAI5UMdEhlB2LUboJTNOznhmg1xbw07FCEgkXrFBLszy3um3+WMLSAFpILBbhZN46lgrMWUq7X+t/jX4pGpPALt0G8MifHtMt0ea+3eZrHqHAGfV1V+i4mKPHj4KTzjxeuQnu3Gc6YsCzbzBgs6VEO9VOC8FTC+EY2C8cgxtby7URRuN+6Y/V6hWxr06LBuMNWrXWSixKYbLOdA/RL2l1MgKTNjBFcCCzwnuu1d1yyy1p1Cqb7rzzzrew3HtUgj9OZzFlyuuENYQ5OvY9TvyXf/mXgT2Jvuz2g6T9XHfddReKaMvd4TNJKmcWooic5Yj0DTNmzHjP586ZsuWvWLHiKl6rk65LbS4JsHmRVZUlOsowFF23aWdpvHAzSNUEeJAIGHJjySsf82d+x4Y/CylQanCgBf+Rz2gyz5ydYLKs27oz+stGifYVW9iY5T77t2dpLzlFu4GnUnkm5D7ViYCTIeGHbam5UgxO2vdDBMkZTqK8IseNB7HdSFltV5jx5PRzy68ElMdgoY2GpOJw9HSsQSmwWhELN4Zx6TiaUsMnb/wY7AsVlxRHYBdN+1CxXzVOm9dAjItnNSVtAC0lTFjcb7SvlSphBqVraWOeM/5aiXpSmwNryhUBJkKt8H6N2seRoSrZfAe2g/PHcOOCiuyiHyOfHQpQaTRBPvXEk6B6DHROLqK+vsP0dwd26Whs5BWkInADFj4jl0DKVCIlZEMbQ8bOBTGUIbZYWkHK5QTAAB9/Lpua4rEaP0dLg5GvzkwjiC7KYLek3Qz4N+S7wYpOlY899thZU6dOfc+nGlBfGjp0aBvWade6devm4Xk6STHi8yTw5mNylZnzik984hMXoo+u2/XpLtDRIpsF/fr1O5VOSOtBdG3pSnvLdp1U2Hnz5r1MO4+/8MILB8VsOXDgwKL+/ftfwVMKOLAmSbowIBYdyz3nElZFoYfTKxetG+4xZTvYnTkkvh6Wyt6IB34QcR8Lw1pI5w7c5EN82NHRpmhHgthk6Ra+JZ9FzebkCMtklUnep9ATBfNfewO2ba7VfUordEF+gahq9nlTQoOzyYWaMzNjZReC8BYCZ3uv5bqGuYNRJ6TmIiIB4r+ISRi1Iy6qMImC9LfpQFBTFgvShtVxWeXi3VSuE087DvoOqIJ9pbFHjYYxE46I5jsKYLJFFlp5pM1J4dJMAo+0Uw3aaqcATitl4A/An6UXMBPQWciKtbxQHLP4mTn+g4+vrfam/dcjQ0TcV7SVb+wD6Vhzwiv5CHYlheVqx/Zd8MpLc3TmQi6dkRPK6F+adtC8p0XcjaccXHb1JfH+dVEBeExzseWSflpBglXBopIGgeo+yJlW1um0vC6bJTYrk68Ox6c1jbOvLvTHyeMkpYLn1XH/mDRp0mcP1gRyck1hWfYsWLDgDZXgj5Pn8j2t/XWS5Zw6tMRNw0e6bY7tFtBRCD5mUlxZWXkOZSLVYpXdb2JJakn019rauv273/3uotGjRx+UnQpI7bj99tvH8aR3usZ2baJQ4pBSFT/Dmp1hylFkEM+ba9nTUmjSsXkaFp8ZmK3Fv+YdKYFzMdwE5VQkcWpr+mCQBUbC6BxNX3Ds1ElwvDVZxsQLNcfBJz1sNzNGFixYBIvefAvNleUqP7/A+DQynrbalfw1FeJrXr3D++Z6HOjDp/EDXp/Tjs3YNUc5qtAaiWlKrhJrZ5poyXiOmguEE6uHWJAgQEmLAAUr1YNBIV75BP8997KzYX/p3EvPjuffmbTTxiaW1hzjoC2QsdkxAlolhC5wfdNjiAbEtENAbg9t7gPY4NLAMWZ9dpoFqvg5C5J+EIcv6rEmpC2ogm1pup8OZi4asx5+mWgh6NJyWL5khVq+dDmwETeTdSSxIVbA4uCUjas2RdtOaXFn4rFHwogxQ8WkbwY7ZcYam34DsFE884CXAmOhS477eEzGrczCq19uO451rNWtX7apH/Ma9tdRNCYL1jxxPJsiwbRjxw67tRhFK/7mN785nng5vPdE5Wy+4447rPmSLnZV/uhF7a+cQu4lOicswktkju2WVtctoEOtK/XII4+cjodReChHW3YX5GSh6Qc/wAr8WI0IdO1wcKjgsssu+5zcoYBXd5H1Yg2OO5b0zaEd3HY880s29PQ7C9cO4wo7fu1E4nikcEyB7fFKHGoOPIgeNQNMKZ5DR3mx1pSWphOwUWE0YDra9fSLM02WNZvrIt9aNuqq59Fq8wvfWEQgBwXIgFIqT/taXGxmdcwhGdCsigYgNTjb/sIPEfNv205gpWrbt7Rl4rHWpvw0I8aeNpqi/RbmSyjm28xrNCgbTm7WtyQdlsoEaefH0v4SWfTCCdOOU337J2tz6LeFndt2Qe3GOqjbvDM6pmtJRFodTUuIhFeINU8BWr6yAKzpirqC9QtHIC41Mm01Y6syu2/iyVs2kCdWJw2oKQM+kUlPmc9oIBfM/M3ALGyQ1HUOBkHl7iqVMUaMH8x8M9rxghaCfnXu67pxt1mD1fqrbbEhO8X3aD3M7Z41IxYm3nfNP0F+IfFM9hfyOKP6pUyxTduxTGSW2XNtrLROylb8OQHVfCpTEWHl0ZveqeknNDipzUWPsAlTx7EBNqvQDEhWN9bqiNcdffTRF91///2F8N4TlasdFZzdZL6EeNwlYkdozuRrUSL4PAWlmMsVzz77LGFStzCsWw9RtOX48ePPp4zCJb/CwkjSOnPOBEdbFhYWktnyoAShoNpLC6BO0wn27JBYQ2CwC5fh0dr6G/SW1dv6NAfaHDOe+ERZ/gqGHYihbbi5J/XFIW1mQPkD2Ui8cgeWGFzIV6TPuvA0VdmvEph9UYq0PFLy8l7Z7RlS04mCT/78KBSkConxRPPOtPCpxHUwzEH46rRvd+fB66ICTUh7dMms/sFmypQ/IKxCZtQXZcx1WoV+OAWs+sg6aFEnL+JEkjbmUMPdNWtzylxzPrM4+MSsZanPu2xGRlq7tjfCqgXrySSFILcDAa4Bga4+OqZra9/aCHsTAO98TKuopMiAQjzv0QaVGB1IG/Oe8RVG3SPF7W4CdBjcBeC5VVnS8Z9tOxc+7xBEtF8U+KK8D8HtZZ4U17X5pOBFIDlTqW9+dsKQBqFGMqDGW/wUFxXrglSBevTPj2kyvzukVMFfdqLy0Q7lDTsbweaPf7SDx8lnnWAnbYPoKdq0jRENtO0JAsLNrJPk9XRMsYgdmqfNdCQn4NoRj/f2NOwprYt3NmDtOwwmSuRHOjD10TW5chW6a65FoCmGrhrpXSCKvqyoqNhL5kvCgIAn6CTFKbxGx4Q9tIUPXSNMMlv3dEndATqFkkFhnz59TtaB2TKpYWUh+Vg+i0Trn71VX19PxvL3HOhoB/HnnnvuYgS6YQzcMrAmBGfe7ZfPw5VQjA098s2tWbJpkCchOyktpoylgeLOz7Z6Bs1YSIt3KXC+Ah5gZg6ekCbtYDQh5mUVxWrGxWcBz+2i+wRSclmkLlkC52sHooLXX5sPuh10NFcuP99WSrSdBTL2vwjmxs9o+SvbPNbKvGdjgUAEkWjJCd20by6jZZYBw7FM2Go7EAgh3CCSb5oypDiQAwBEgIgV0qmPIMip0DdHmtu2dbW0hiVko7bWdoq2i56VRGmdcd6pkHagGgOeMR1q1ow0a55ppzY5YFdKzjsMmDBNLo/Gacy22RGphTYYfxswGyAqEZFqJpnHABB9B/nhYrOeaWMlNbn4nuL2F4NExSvB2Evx940TUTQeaOpKSVEJdLRq7IuvCzlFB3/ZyH3YzWu2Rr5qbhjKaNqMk6GsskRFwpYZVXHHSdvAnihoJQY41jw0iPHuys8fQ4k6poNww7jaIPgEt9mKBWuHmHB8HkN2bh2R3IncSzLgXzIsH/8qabNs4oHwHhMCnS4vLyfz5WJpvpRl1gk+Op3gw2PzJaZ3yubNm7u1yHOXQEchnN/5znfGogY2kc55pwKiJAQOrweaXjRJnMyWeNwG7zFRmdAxWjB06NALkiSeJNsxaXThbr9inovdP2pvY0s+rUYOofGCjYlxD+ZD8w3dwHTaDYAcsCxFKg8kfXMNM4wYJDuiSDIvbYgd8QR2kjXIlEL2wBpCrDulYNmyFbBi6UooKSxV+XkFPJgNGMfAxnvfCW1OMlrOhplcts4Z9R3Teay2oAwbMC+DsXUpA25KMGVXMS14PnBdFLhHYh+XlspIRgiL9Y2ZwQjAk8Zj0EurKgSl8y+f4VWCgIs0N7/y2vuVtB2fb9juBzKfcf5pUNm/EmLBnoMltLaSPl8ALS1fijmv92vWpxIqGacU4aT19xn+bgURv6uBCHAB4weUbWvaMNbMjTlTS0BTAhiicyU/kRaSC7MmjjqOfiEvVQAU5Ut9cTn2SeWJbF3xOzcmSHOjrajkPQpMuegD58UmY8+xwPkbIUIZf5wTDjKEW3uejnqrtUSYBK2QZnuExwtoZ4PdfWi/OtNGupPxAtJ8mXAvLdeKnDJlyr/Tptnw3mt12kRf7sb834IsEkk2pUnyZDZfot9xwg033EBzD7vEsS4foBDO008/PTLzkcqIGl2TtJl29svHUjVdtmzZm5jEXkT491ybu/XWW6O5gKhCv4/LSGt1JpVbqeRJ49ofpLZey19bPVQnsTAT6Man2grHWuoPJr3oX5CRF/HAd8t6RZqSkDDlHCQySZVWlMDxpx4nhlBssqzf3iDMI2DvxQXI7POxVB9fb9y9G/1yCyMGE2tyLtozLneK12aMGD/NAVMyHJ01kkyJjbVAn6+y895piJwPgO/mAc1h6QBOm2TpG3Qmootjo905PmuORFmV+6SWGdm+HwkW2OYXBCBHWhoBl9QeATxNC0Kia9vQf9ey1822KSkthss+PJMWe7Z5xb/ahbG7QBqZnQfw5tzra54gwG2l7JQCqzNbhu+mRieuyMFtFgtIWmpsXrfTzgwXN6Z2ghp41oG4L8XP+j7ggrx8RT7iea/MixYs4LL2jBTsQX4ppxxQzSkwZfjYoSpWlgVAGeMK9wBjmdUKpFXRLwTLaMrgOwsRDJLAsod909dRt63bXsn+aiWCUyQP4ilPGbUTvEtuYIoKy9FXXXXVIHjvgS6KvqTJ46iFLUla+zIbhXy5ubm5lbCI/I6f/vSnL6AVu6ALSnWRAf0UDhgw4BQ64Al7DF7QDZIITRuQPvTQQ2/jYctBADpFq15fd911M3kuIKnA2GAZmqUcwGweYO2NB6roeNDe0q62b6qrzMjRDhJ7AqyZMV93kpySipnVmOLnzVqW1lfHydOD8YRhukpS6vs/eilosf1OmzBZJvF8m05GucECzbN/e57my+niwmKdl8rXkiGJ5tVyAKZNHLW85qRebgvHME2AhGYUsyAHFsBkJIaXf9ru1GACSfx8ndDsTfR1BlDbLJoPlHiTPwrYqBgLOng09fTjYerpJ8jiwMblWwxuqlD3DosETuHH/zo01Gys89I65oSjYeyE0aZKBoBZR2I7QVx/LzhGZMrvKlkGK6SBF9Aj34pVLDDdS9l3VdpOC8ikOA2ewmC/cYZ1Rzst2RXTChdcRvdFRA5kOYBC9BEXpIr088++AKmIjQm5UYfvJJY0+pcsHR0mAjkyDmPetIVVR7o9yiu2FKQVeHPeDCgrAI6GDg0Xst/blmM7s6iLtXA6vx9/MdQ4t/Vvb8lYatBj/KHp0qbsu1/SHJSCpxWf//znP3Qw5tRRUUpLS5t//vOfv05b94QCU2eaq8QcPO4gLKLj/v37n0oxJNDFB+8U6KhHoW+uCAsX+efIERgWjguY5X2v4ChZrFq8ePH2Y4455mCYLYE2jEX12a6EIiYgemZLLjf9SmmJbOT8ZzTc6F3skBVtLR15IFZG4LEA2sGLlqc8HJ2uJ7QkZaW+uHjGL8TpiOjKOCGazNwBx50yWfOK+JwNmyzjNzsf/EqyZh0DzKIFi2Hn9p20GwF6SPLBbv/j6qVZ+hZBJRxskqAqesDHGgAjPAeiGL8PWCNalLYI7dPCTKlEhJ/VcITuoqXTxPIpW2mwmh9rN8ryVwuO2s7RY4+OpnUq1QWXn+tVbxeaH9tb2yx8Af9quXxLfJXBkNue7jXtbsoITrnqEx+EwpLCqBzpODBFRd/cTmgHZ8cEf+kvzir49lpL/4cDJCNXWIOiEm0bwZfWlhVH5THfOlFSUjZ6Of5GvH2V96j0yfLXERYNPvCBA8dlKg+Ki4phR+1OWLTwLWMClcknsiQI+SEqBrDZW9BcwxE4hoaPHqLSMmQ57tmmudl/HvdfFkrBC1KxLwGPLC1xUpsHNXd/b7/GqK93tLXnr1++qa8ZD6LJfKGS/XWh60VanOQWPpWVlRdUV1cflO17kAe3LViwYHvS1j2SF8s/vqaFL4+wiH6rqqpmEEZ1VZdOgQ79c+r3v//9ZA7caGxs3JMEcNk0vODZ9OrVqxei2rl3yZIl7/kkcQJt3jCWzpM2jJW/BGZycjgRL//FphezAGt63ZJNg0DMo3FSmUlbCqaGVSs7KpU/huM3hAVD3o/dL3KvOV6Itj0drfIgNERiurHJ0qbqFyuDtDMlRgVs3N0IC95YQCZL9MvZ4BPTnjyXLx2m4ZmmZLrmRfusHbCGWSqzWY1mDNDcWrEdibUOY2Yz6KU866CSwRcxw6BokrhesRRujXBBFKZLm9dn1lbnYm3KCw6hyMhwOkEUVKJlS7E64+OraDHL97gcdZv9yFgKTLkA89KOMZrPbPX/2IpmSst+SB1rDNorDICFEgvhaedr4nYAm432ixnLMBZX0zwVhr+HcgKdY1zxuWLbvMvHU0Hj+1o57Qy4n2v2/5o3o2cK8gqiVXkWoFmd1jG2vc5Tr1RGe4fnFIG5x0StM/5QMFd7R6sSZYjztaufGD+bs1IYXmH7sgW8uI+LlJStgxusELSbsSLUbIzMl2kjeUfPil1SQArjOsGFJIGhpaWllY5pTt0nPvGJbvm2DjQhpnSUlZU1IRYsUoFrSOKJ/JN1YiIsMocVt91222jooi6d3kTkzR8+fPhkygQbqYnsognmh4zjkLgSixYtertfv360XcR77p8jO67cMFZOKQgbnO4jDireVJVJRj0R0b2mxta8xvo9peIyj1QjsAlTmuFodBhb9uRE8GB8mkv+HLU4KjE28blBTz6x406eBFX9KuIr5umaTXVhcpCVBBemwU6rn7z+6huQrwo0mokQ1Gkw2WkOEagrJaR+gNBcwkPbMkBbCvE8azVpwRRtZZXlXdqyDSECmDT8OmgHGkYDUWa1DzDM3IboS4T0zJ4MAMIxY5HFaJ5nnD8NTjrjRK9JI22upd2WRYtyOaYH4IsBMom4RE0NzRmBKWdecHq0Yko6ms0XadCCIcTqoJapOATJhDjub5BhVlQC15wGHEtYsQbDE9HjBlSsiYK2AUHxC05RtxRK6Pwtoonm8a+LDEqQyfyJ27GvtiC/kPooPPe355zCbxub/+mk3xuiwJQOu4iCjvYKHDl2OERaHVschFClddi40SwI/oTcpsA7jGhelcfFCvHrKqEj2Ps7tzVU1G7cUUYnbvd5x1MkGDCvymZhk66n66+//gq0rL3n5kt0XaWLioqaNm7cuDoblhCFfSWsE5ljEbxb6L3zzz//gtGjR3fqp+sM6GhieMGIESPOoRP0ZzWpIJpSJQRrZCNaDeWee+5ZhebL93xLHioz2nG9DWPxo3vaXFh+irZk06Q2/jk5QZzXOVz22qph4PushLQVvaw8jmdMEyz5xvuP8bYe7jEdmmvsNASldWh+SbdrkkClpYX8cpkTw7tqdqOt4X8U0bZuzTpdVFis4h0JvHSY+CQj8STwk6/bI3NqTDtKSsFcUQU2jttWQ8tQeGD5IWa1VkOTDESDU34Eb9GCG0uthlMEy7ui+YkRl6rqX6UvDEyW9AhPEWBO57DGnPvFAavOGLatTdvTLwWzhKvX/Mu/f9RokIwF2slORiAyO6VpgaSaTbHa64txUSzou6AxUCaCytUMWNuUplwd3vPNo4mfPdp1QfKR6Nvz/mvKbW/jt2wMcmDGDVizvo4298U+Cju274Qtm7ZklNp8OugK7Ggied22HebV+NufbbQ6IQ6Zxk3H7k03XUDHGpnZQcIrvzPdunPxWlxx7Z267xr9u3VdbaXypzPZ9jS/Wuxhl1XpkEEp+7IDwIEgqkNFRUXrd77zncVYjsbOwC6bNsfX2E9XXl5+NGp4nc6n6xToUIsrpGkFrPpyQaW9VCX47BKIZulvwPRI3XzP/XNXXXVV6te//rU1W9IamxyEIutD59LeLRdxlh2Mz8mkUL+tvhycf838o5lRx1cFAJkrLA7zPWXfFGMyWpHBuqLifbPiW2mpScNxJ08261nGuURrWXq7hSczoAyfnZXGU/Dm62+aqQT5JlmePwagPb3Ai1K0TCpgVmAkUQNHwOtTshaXwZyNmOAAX3vaRmIdWIuLX9MMkvK72VdMGorNtF7aLMRzo1jNKQ3FJUXq01/+hKIFmM0LFuRIm8tg0RLpQNjBFHiGOAY9rhtFbu6o2SVTg5KyYrjykx9gSI/aw5oOgSFCM6BpNoPZ0H/xLfiPvwm3WdC2rHC7tgEbdcnaMQsbWcc/y0HGSs1aiPsmbqAYrZHBzX06/pUCoAE9Wg+T+iq88NyLRrhTfnGUFDkyicUiisBsE8LhmCOPgFHjRsSCnHI7VcTLgimBaZL3KQN6PFYSeYHyRSGtvPIp1+Ak+21aUzOAeI3YGsrmRwI3gRzdkxaoJLOgDEoh8+V111034GAsCYbaVzthAfrrFoHpT0lWNflOEr6QskLX0Uo4g7AKOsGzzoCO5s+NJv8c+bMwoRYt7KadAVyockZLY73zzgLargE663HvEpEJVpoteR+9zt7RJtiEo52Edsf3YPumnaVNZiUU9x51Pqnhae9e3OFthKWfp5XP+Xm33Jf25t0AMwVa6gtOmT7VGtuIfJCTZbDclOvof43IV5aC1+e9Du2tHbowv5B33XYjMphnZke6L5mFjMrmZ685sImBL2b9XEZrBlPKXnawYc6ZMSfkw7zLaTHKb2YTZBGlKczT2sEtpRubCclBwqufWL8ct4iKQakumk6QwWK5GAJI3UXL3rS4IX5pmbA2YQqlv3ETxkS+QVIv0/HaYFEleeqBbQLgFnWaNftEreaWUklgws+bdKyurM1XkBzaqXP2W5o32MSmmB8oz6poBQzRNBoMkxM10C6cXvvFMxCro9VgoijMtpYOeGvhYnA+RJGyTvoyAODkp2gtTN7OB1irm3mmojEmVgCCKDHNgzxxrAum7RWafZjaro/q8YGwk8RqIu1VV1u9s1SmI82YyJ5T0gJlnvGO+ZxcNnz+sY997KLHH3/8PTdfzpgxgwZcM5ZlXXf2qCNKAkPyOaZj01qf//7v/z4C0903oBs7duwoo821yAySCqOC6Bj5DIWSvvjii0sQYN7z1VAMsOUPGTLkPB2bINNy0rvsBFwHlpCYRKQlvxOdr1u2qb/pqGbQxdGSSuwwoOUoFhSGI5urrqdL6TFWZ+LpBfEGoMABcCPGDoMhIwbblEgilQEoLgvltIk4Lyk5AnOsKADlzYVQVFCMPsp8Ie3HgW1CMrVRZwDgBe0opZJMDXzP5qlYdtcWG82JK6KAdg6Y0MoJwBocL1ce6CqXhn1SiysRoMnIOYpmFBGlTgrX8dxFIJBT5Cuz6ZlfFHh89Fc+dvnZJ7HDgAUbnkymy5oN2/2E8DpFek464ejYVweaN4WNhSwzBSW+BhZ0DDbYcWkRXdlvwvgej1ujeclgn6iduAfoTDx36g0nyMFZLubEgF78YDruxzZx4DxjVNTa3dfaMwlK1IouRlGYBcWw9O3/n7s/Abf0quqE8bXOnWseU1OqUplIIIGMkJAwJKAIKqKtAVtRQ4vYNN1qN+C/7ccBPp+2sR3o1v7r54CKEwi2KEgCKCQkhCkzJKnKVPM83ppu3brDWd9ee6+19tr7vOfcW4HcALueW+ec993vnt6912+Nez8WY+uwwyFF30AjG2KJHVPGTozZ9GJb3XkXnEtktkMFXR4Xt/lzgmmykxfkeeU4HO1wbdJx1QFUBbZvVhr/XY/vXq5SXR7HzMD0Chr3AMExaLpTSqCJPyTel3OaeJcUbsptt912P2PDbJ6pBSxO/D2oLE/z9fXr12/kPZm7Pd/1RhAvW4FTiGjv1ZZ1ZU0Nqi+FwT38D//wD3suuuiiOVdbcpB4aP/I/Pnz7cDYbnmZI/JqAL6m9rj6SJ6Qb/rgrsNL0HZJiHeLxUc6+V3Kqhu7QnmhOJWkYUrb4RMW63Q6cJrxdALZu5BTudsD5Gahl6Y8a120Du77yn0wL6iB2MhviwmE7LnF6g3i0IWuN8wTUikyA1iaUOjVS5nR90aoVKc8myghNAGqV7+R0DbKP3zdvr0JVdv5JIJYWpToAm926ZXPS6EE1aPHDp+A44dPdJTWdYFowo5Hyh9y4eToWCC8pzsy3nLrD8YNpEmoo0n0RObY4/tJIG5MWHqaOr1kwewV3wUMEzfn1JXulRloZpCrO4WqSi3mP5mOOuuxyaqtZjyUHJHUqteCmYU4BOa+r94HOcTEi1QAvd6MoueBXYfsAS765a+7EaemJkqJIw8cJlsdGYPgmhS/R77L4gr1GVvTBqKJlmDRWjWX7tt1ZCmf/Sj1Q69Ub/RMpaqzHcDhBF/jA0yfI+9L7sBUwITdQSprPC+sdkbxn7EAmUe8gQn/npiYYKzCbhV27eC2bdvgS1/6UpTjA1Cc1sKbGqT3asKmv9k+F4Dj1FNPPTWnYQXcpsA99P/jP/7jS8GdvFDncypWu1apAeKnl+x2P7lvcVDv9RGVfXZrFLBwl/b3vTE6cYDkuE0S0HP6ISoICn8E4F2wZAFcdf0VVjbvgHLKE0XroAcQlYYc2Al5OnXiFGx5citLc1GqjQeN5khZ1ZKpEayW6I1Qyj0v8Wm/xCaWpbnIGucQBTKK7UEs+ZqSgFgHEVeS5yQ5dbLIkOnbCubcpwguth+wYCd27JkWL78lyxbDj77lh6FOqrJsSr3lBpgFEua0r2G/TN415Wff/e84li+q1aYjQLdjnB2AYlI6MBYECAGqcXWAqs2WcVNmxCaeMCheajeVZvzEZBeUOD+o9QdQwL+uJwUEVJlTuSgTp9tZE+Btg9SkQQg2bRweHA5zeAvs2b03Zc0CpK+6S0pFnoqxjFmqOz9IdQvDWgNI8QWgI6mF++IrhhVMBtZxVLpoOxbIWunSGGH0pien+o4eHB1WWtT25xW6xAw6r93a98CNFR0/fvy0XF8U1H1XPBfB46He6QByY4cOHXoSlCJh8+bOlNXuWPdHtwP7sz/7s6eCINW1vq5Ad9lll7WD3nN3GJQd/kDSpsHzDdLvXvpj+5yA5VyHFdDatWv7/ckLfgszy+TE4l4qAO+owp5QUBihldnM1CNN6qR9KZV57Q4QjUGo5CmPaCglODU/m+wdbD26+XtfDv6ZFE6Qnxe5qvpO5eKXa0yY7rv3fhgZnkd9fQOAmfhk1W7JExdk0vYHrBKZOgtKdVJm+cldSI1Vpz8hawpaWGlEncotl6AFIHYQAXWFN7segZPe3K7+ZEQ3gty/f/dPw/C84Y6+scrSbGiuY1Wl+aMbv4m9L6ejZToBlSW6n/wP/xaGRgZJJbnU7Hx4qEwPdMBFLs5Opd0cza5unxUvAY5tSAuF7H2aCrqVpEZ5OAcGQtovVKUaZazIti6VMBN0gZRou+LINFTuTC9nptATfN6HlU8lv/+r97sdU6D72LukEzpJdYcL2eqKl1wOU1OTmBshmpx6/eqYQ/60YrJGRKVBP0dNOUJuTVNuEux8Yu8yVfUp0+3L9WU3gYImf4BpoPOv4v1/YY7THXfcwacZjB89enQr2+k8kDW1u1tfQjemg4S66/bbbx8NEip1q68r0K1cuZK3azn9wAMP3Ma6YX+vFiGbREy9ztt+hU49EspjteWcAh03IAzCMO9yLWLueK8JoKly1fW34qRjteX+XYckUrh2gVXDOxpjmv6UAbPJLjr5FtkSQ7c4hLMuVUDJBsif/QP9sPGiDUaNWJqbHHdE16smyTcfKohKmfiMr6ef2MLH7/Bu/Up8HGAYlcoPlcmPQ434FWehixe1U66L8l8cuoKrA5lURoCN+KVjehIDRmD2KUdnO943JmbBxlepFEX15XRUWjLI/ey73wKdZ8xRdBRJKksqRyC7kRcf+p2Kiw15yuyuvtFShSlp7fo18LPv+ndJnUh6XCsPTdtqZAjM9Tt7GSCYlFw2STkGqD025a5nJFBALTrI5ByF/i4xTkLDE0ghlR0XHgfzdm/VS3PiH9XEPYNu+Dc0OASHDh6G3bt3F2DVmKqJqYPDAeQ+iPylr7oOBocGiU8voOK1qeNTeVxVMRUA3FrXElNexFKY8z+IqGj/gZ2Hl8qWYNQEbpyYEde/xu5KXj0BIIDNq5cuXTowE038ZieRLM/89m//9t1BgBhrut8kjWKDN+kjjzzyr7y1WK+NSLoCXTDsTbMb/q/+6q9+3B+r4CW7+pr/VE7swQcf/PSHP/zhneecc84EzHEK4nEfe44GpL+EuqgtfVJ1ZTdHFAFAOrjzyIKgtuxPC06EAi8ilUyZJHYDrlVpSb8va9i4vJiUS7aUQY4LX3/hOlzizpuL+1l6jWgtPAkhyX+5eAY2luZY7ZMCw/O9tnLXSWLTbUsKNtTt1ECmRQLnoCJefgn6CDyAVUBAtZRVMRoJwFqpLC/RFQyXU036J73+N1FiFWco7Q6ietNwcWheDCMIILe0o6GTE9NwaG/DuX5ENWIDuX/5Kro8TRS46RrC7qf2O/f3nIfB7pZbf0gMmJScPOIcbCM5eil9JnIh8Ro1R54bsqA5Ephs5wmTy7K3CSoXogs1kStUcGmeyctuLWr+S8VRoy2GskTnB8lJ+VlrgtgXVJgj8MB9D4DFTPqpT+5P5mXFnphUp1eHh4dg/UXrmGUoeZUcvC7rJjESVDST/zT2Lq/RtD40nIIwt7+pq0BMc44ePD7sx8WNUzFuyqxjgz8FX1OVX5AQ1/LpNDfffPOcqy+DynQi4MOBAFCfB2i06RepCYyD+vPwH/zBH3yCNYZUb9PkUi8jJFd6OjRkz1133fUxluqaJmCvxnGQ+K233vqxhQsXnnjBC14w59t+7dq1q+/GG2+8XtWW9YGxjYZ3l3yAuBB0/knbN+9e1lmbm3Tid6eEByqi3cnBZXd4FK4vbVelhDODHC+Y6fYkbrxovZFPluYsfijTclkeKtnk1V2DwAmR5thFGzk43IMHOI5ZdSt1x0s7HCnHjYgN4IU5Z6Ywmb4gqK0ti2MaCQZ+c+fqufTLEAQz4QGTiqX7ZFsUk7N15Bil4ZFB+Nl3Nkty7elp2Pn4Hgnm1v74vhF4eNN2l6X45tdg1/072+nYXpe7nDt17Y1XwRsD2KVYK3agMShKbkh6tBA0cO5otqcEBYZemBkIsveSb+s4N3SDyKmf5ZKpBHzYOooKJDXOA5r3siSdh5SlOS/ZkXAyMcVwg/5BOLT/MEVbXc00FnwGVRd1tLNUp2/0vAvXx12IMljlZ3VcEQzApK1Qamn0CQRwS0oddUAZWZ3jqg1KN4D2bj2gW4JlemKMQynZ2XuoEl/zB5jy6TS9PBafrRRUptzIE//rf/2v21n9qNdnMo85Wx4f4h20lrdvCbfGemFRz8695z3vYV3Y0V/6pV/6TGjUvwBkFVEtzWkD9Y89LcPzvzcyMrJvw4YNJz760Y/ONdDxbigDwUb3KqJ8YKxva8URxe9szPVSq+6AIvrwqLYMaqsFWYoTXX1OahUrwMa0bHm0ROMTNUfGBpLo/ZOdRU4tcF6dnGe6Pc1qFKvw8L5R7YR2zn0oMUTf99QWhlWW5r6apLn+vn4+R0woWFqJDpxRJDM1mkDFZRfjBmDghpkIoOWmmtyl3iV4IMp2olSuAWVii1M5kg8d3HlJLtcJoOVmJkTATcdN+8Tn+QXACFLSagCoxw+DrWw0SlV6tR5bKJqDBeB5BsODfrk6vWzhkSJ95w2fSweYXDefosAxdtHW2E7bhOnp6LG9barVfmTj3Ym4efxsxy/jP4SeKxdGfjByH9uKP5SkSLIA9fS8115KC5xKlOQldxTsGCt7ugQ9lmj6AuM2jF9/+JG4nV3FF+TfUq/2oWZKslQXpPzhQQEQ3XeTQ39crGuiEKrGUJSCvLbRtV38fiTcAi17G8GNMbhwJeYqdj+9f6X6EggNg26pSc3nr/sTAMLHnIcZhDQdbISnHnrooW3/83/+zz9iD0xPl2tVpV6Tr6wt/Mw73/nOfwlYwwtiqldFMwFd+5ZbbjkVVH973/GOd/ztn/zJn/xRAIwjTZX7BgRR9J63vvWtv/mZz3zm60H/ezT87tmIZykh72qtB8a6TUBTIyvuR9vP6kv+rmpM3dxZOH8aPXB8+PSp8WGzukMHF6Esbp7AILM2ctsgMzrvVk4mrSki6urTSZ/KchycUQi224zLbmaYA3Lk03/4csnoI9vmtjwVpTkCscMRFNx0GhthLdtUoVMmeOJAQMrpg7PvOMpK9jBhSXCNda7In0l+ies1mxIZI6+4Sh1aH/LYh1a/MNAJ7NrKYoR/b3zLD8UYtaZ0aM+RaCur+u/ragAzcPmxukYN5ZTAVgJf+uR2nBw95a5njPruH7g5BZQTmceinhqQtW4kWE/ovCNraY/cJykI8GMq/SkoOVWxNcSBURZpMTn86DxxoQ02nw0MLfDT/Zc98vSFG3g655SEzOE3S3W7duyO3rGeySogvZidne9sTDwwM3PE9x3zSS3PN4AFlpOoM1NfBOzaeWlS3jdWwK1kEsgYEOEI0vqfnpzsGz14fEiZcDdmJFondGUU36kyLenpLXwCwOLFi9khZc6luoANk+eee+6R22677etB+/e+p59++n7VHvo2e4xhDGIsChjz4QULFnA8Fb+gnv4fM+plH3vsMXrhC184FdSA40GqO/jnf/7n961fv/5kAD9+w1NBYps/OTk5HgyLhx9++OF7f/d3f/ej//t//+/PBW5hW+AUDr/85S8/E8qY802c2T73/ve//5oLLrjgZ3hHlP379x/pxv7osTv6ydd4oWj8nF7ngd75xN4lgatfBEXYgCOvCS502RY0TNV/iTQJ5+KiRQ2ITFLMZZOz4QWJDpevXgYXXnJB3AVlnOP5/eLNram/Fr/45PB77v5iAMozvAsKVipIcBit6gK94DuOBVFLTZQuarclUoJKhllUY/oVsIQplAeo8ILJMXEIuRIEJ4GYBCWATubCLcBIcaNnVHjjsWZQuOWnfhCuufEqAOicJhzPtn/7oQJ66lHFxjtNAAc98un33jlPHTsNi5YtgL7+PoCqVRdecn68suXxrQCIhdwS37pccxM2MyeICnj2HqT9aOMIfCBESwRsU2/G8U77ombKz55NypehCw/IZbtO2UdiFDEDpAGrPacBaRbV4qaITFBuI3t78tlya9etBegm/Tieoukdstfr0pVL4LGHNsOOLbuD5mOwWAaione/c/etfJuiyhS2lBuGlkm5+mD2tHZrwkqdt3BkfNnqJacljMB33j/jmY3GXgcGvh1AblHQYg2Fz38OgsF+pvcwxykA7nQArokDBw6MfehDH3r8iSeeeGzNmjU8sacCzgyF9vUFVeuxrVu3bv6Xf/mXz7797W//0L333vtouL83YNOxvXv3zihIzXgyK6cAcJNBsjsW9LgTAcCO//qv//rB8GI+GwBupD8dOc1ANhkG9lQY/GNhwEZXrVp1IqgOJ4LKcs4HLiTctm1bf1BbxpMXgmjL3pasOm188xoo7pxR0In5CnhRrXlg+yEXVuCdKmTeom7aWjtcOFKn6xhbpNJJQsdSFZpUG4VkFbk7ntpbHt9OQYWGx3QXFE9CClKi11DamG8EGyoc2HeQ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", X2 = "data:image/png;base64,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", Bn = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12%2013.2521L12.022%2013.2261C13.273%2014.4431%2015.077%2015.8571%2016.642%2015.8571C17.1534%2015.8623%2017.6609%2015.7667%2018.1353%2015.5756C18.6098%2015.3846%2019.0418%2015.1018%2019.4069%2014.7436C19.7719%2014.3853%2020.0627%2013.9586%2020.2626%2013.4878C20.4626%2013.0171%2020.5677%2012.5115%2020.572%2012.0001C20.572%209.87007%2018.814%208.14307%2016.642%208.14307C14.979%208.14307%2013.342%209.37707%2012%2010.7491V13.2521ZM16.586%2014.2971C17.923%2014.2971%2019.007%2013.2691%2019.007%2012.0001C19.007%2010.7321%2017.923%209.70307%2016.582%209.70307C15.24%209.70307%2013.933%2010.9461%2013.016%2012.0001C13.624%2012.6861%2015.244%2014.2971%2016.582%2014.2971H16.586Z'%20fill='white'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.052%2013.3031L11.966%2013.2171C10.753%2014.4221%208.96599%2015.8571%207.35899%2015.8571C6.84755%2015.8623%206.3401%2015.7667%205.86567%2015.5756C5.39124%2015.3846%204.95914%2015.1018%204.59411%2014.7436C4.22908%2014.3853%203.93828%2013.9586%203.73835%2013.4878C3.53842%2013.0171%203.4333%2012.5115%203.42899%2012.0001C3.42899%209.87007%205.18599%208.14307%207.35899%208.14307C9.04699%208.14307%2010.616%209.47607%2011.936%2010.8991L12.052%2010.7791V13.3031ZM7.41399%2014.2971C6.07299%2014.2971%204.98999%2013.2701%204.98999%2012.0001C4.98999%2010.7321%206.07399%209.70307%207.41499%209.70307C8.75699%209.70307%2010.064%2010.9461%2010.981%2012.0001C10.373%2012.6861%208.75199%2014.2971%207.41399%2014.2971Z'%20fill='white'/%3e%3cpath%20d='M10.817%2011.8591L10.92%2011.9491L11.97%2013.2861C13.204%2014.4391%2015.004%2015.8571%2016.642%2015.8571C17.5453%2015.8639%2018.4231%2015.5577%2019.1263%2014.9906C19.8294%2014.4235%2020.3144%2013.6304%2020.499%2012.7461C20.164%2013.3501%2018.999%2014.2971%2016.916%2014.2761C16.8052%2014.2893%2016.6936%2014.2963%2016.582%2014.2971C15.24%2014.2971%2013.624%2012.6861%2013.016%2012.0001L13.029%2011.9831L11.764%2010.4621L10.5%209.2621C9.49001%208.4901%208.44301%208.0061%207.29401%208.0061C5.35301%208.0061%203.79301%209.5491%203.48001%2011.3921C4.34601%209.8231%206.21001%209.3171%207.84701%209.7501C8.91901%209.9341%209.84901%2010.7871%2010.817%2011.8591Z'%20fill='white'/%3e%3c/svg%3e", U2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12%2020.5C16.6944%2020.5%2020.5%2016.6944%2020.5%2012C20.5%207.30558%2016.6944%203.5%2012%203.5C7.30558%203.5%203.5%207.30558%203.5%2012C3.5%2016.6944%207.30558%2020.5%2012%2020.5Z'%20stroke='%23ffffff'/%3e%3cpath%20d='M8.86072%208.01115L16.4986%2010.0743'%20stroke='%23ffffff'/%3e%3cpath%20d='M13.0888%207.2701L13.4955%205.49606'%20stroke='%23ffffff'/%3e%3cpath%20d='M10.5031%2018.5043L10.9112%2016.7306'%20stroke='%23ffffff'/%3e%3cpath%20d='M8.17914%2010.9685L15.8161%2013.0351'%20stroke='%23ffffff'/%3e%3cpath%20d='M7.50006%2013.9249L15.1378%2015.9888'%20stroke='%23ffffff'/%3e%3c/svg%3e", q2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2027.6.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20width='24'%20height='24'%20viewBox='0%200%20841.9%20595.3'%20style='enable-background:new%200%200%20841.9%20595.3;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23FFFFFF;}%20%3c/style%3e%3cg%3e%3cpath%20class='st0'%20d='M744.2,233.3L634.5,48.4c-4.5-7.6-12.8-12.2-21.8-12.2H236.2c-8.7,0-16.8,4.4-21.4,11.6L97.6,233.1%20c-6.1,9.6-4.6,22.1,3.8,30.1l301.5,289c9.8,9.4,25.5,9.4,35.3,0l301.9-289.4C748.2,255,749.9,242.9,744.2,233.3z%20M589.2,284.7%20c-0.4,18.9-56.9,34.7-132.3,38.6v88.3h-71.2v-88.3c-75.3-3.8-131.8-19.6-132.3-38.6l0-39.5c0.4-18.9,56.9-34.7,132.3-38.6v-36%20H278.4v-51.9h285.7v51.9H456.9v36c75.3,3.8,131.8,19.6,132.3,38.6L589.2,284.7z'/%3e%3cpath%20class='st0'%20d='M456.9,272.3c-11.5,0.6-23.4,0.9-35.6,0.9c-12.2,0-24.1-0.3-35.6-0.9v-37.7c-64,3.3-114.5,15.2-128.4,30.3%20c16.4,17.8,83.6,31.2,164,31.2c80.4,0,147.6-13.4,164-31.2c-13.9-15.1-64.4-27-128.4-30.3V272.3z'/%3e%3c/g%3e%3c/svg%3e", K2 = "data:image/svg+xml,%3csvg%20data-name='86977684-12db-4850-8f30-233a7c267d11'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%202000%202000'%20width='24'%20height='24'%20%3e%3cpath%20d='M1275%201158.33c0-145.83-87.5-195.83-262.5-216.66-125-16.67-150-50-150-108.34s41.67-95.83%20125-95.83c75%200%20116.67%2025%20137.5%2087.5%204.17%2012.5%2016.67%2020.83%2029.17%2020.83h66.66c16.67%200%2029.17-12.5%2029.17-29.16v-4.17c-16.67-91.67-91.67-162.5-187.5-170.83v-100c0-16.67-12.5-29.17-33.33-33.34h-62.5c-16.67%200-29.17%2012.5-33.34%2033.34v95.83c-125%2016.67-204.16%20100-204.16%20204.17%200%20137.5%2083.33%20191.66%20258.33%20212.5%20116.67%2020.83%20154.17%2045.83%20154.17%20112.5s-58.34%20112.5-137.5%20112.5c-108.34%200-145.84-45.84-158.34-108.34-4.16-16.66-16.66-25-29.16-25h-70.84c-16.66%200-29.16%2012.5-29.16%2029.17v4.17c16.66%20104.16%2083.33%20179.16%20220.83%20200v100c0%2016.66%2012.5%2029.16%2033.33%2033.33h62.5c16.67%200%2029.17-12.5%2033.34-33.33v-100c125-20.84%20208.33-108.34%20208.33-220.84z'%20fill='%23fff'/%3e%3cpath%20d='M787.5%201595.83c-325-116.66-491.67-479.16-370.83-800%2062.5-175%20200-308.33%20370.83-370.83%2016.67-8.33%2025-20.83%2025-41.67V325c0-16.67-8.33-29.17-25-33.33-4.17%200-12.5%200-16.67%204.16-395.83%20125-612.5%20545.84-487.5%20941.67%2075%20233.33%20254.17%20412.5%20487.5%20487.5%2016.67%208.33%2033.34%200%2037.5-16.67%204.17-4.16%204.17-8.33%204.17-16.66v-58.34c0-12.5-12.5-29.16-25-37.5zM1229.17%20295.83c-16.67-8.33-33.34%200-37.5%2016.67-4.17%204.17-4.17%208.33-4.17%2016.67v58.33c0%2016.67%2012.5%2033.33%2025%2041.67%20325%20116.66%20491.67%20479.16%20370.83%20800-62.5%20175-200%20308.33-370.83%20370.83-16.67%208.33-25%2020.83-25%2041.67V1700c0%2016.67%208.33%2029.17%2025%2033.33%204.17%200%2012.5%200%2016.67-4.16%20395.83-125%20612.5-545.84%20487.5-941.67-75-237.5-258.34-416.67-487.5-491.67z'%20fill='%23fff'/%3e%3c/svg%3e", I2 = ({ IDL: e }) => {
  const t = e.Vec(e.Nat8), n = e.Record({
    owner: e.Principal,
    subaccount: e.Opt(t)
  }), r = e.Record({ icrc2: e.Bool }), c = e.Record({
    icrc1_minting_account: e.Opt(n),
    feature_flags: e.Opt(r)
  }), i = e.Record({ e8s: e.Nat64 }), l = e.Text, o = e.Record({ secs: e.Nat64, nanos: e.Nat32 }), A = e.Record({
    num_blocks_to_archive: e.Nat64,
    max_transactions_per_response: e.Opt(e.Nat64),
    trigger_threshold: e.Nat64,
    more_controller_ids: e.Opt(e.Vec(e.Principal)),
    max_message_size_bytes: e.Opt(e.Nat64),
    cycles_for_archive_creation: e.Opt(e.Nat64),
    node_max_memory_size_bytes: e.Opt(e.Nat64),
    controller_id: e.Principal
  }), s = e.Record({
    send_whitelist: e.Vec(e.Principal),
    token_symbol: e.Opt(e.Text),
    transfer_fee: e.Opt(i),
    minting_account: l,
    maximum_number_of_accounts: e.Opt(e.Nat64),
    accounts_overflow_trim_quantity: e.Opt(e.Nat64),
    transaction_window: e.Opt(o),
    max_message_size_bytes: e.Opt(e.Nat64),
    icrc1_minting_account: e.Opt(n),
    archive_options: e.Opt(A),
    initial_values: e.Vec(e.Tuple(l, i)),
    token_name: e.Opt(e.Text),
    feature_flags: e.Opt(r)
  });
  e.Variant({
    Upgrade: e.Opt(c),
    Init: s
  });
  const d = e.Vec(e.Nat8), f = e.Record({ account: d }), g = e.Record({
    account: l
  }), u = e.Record({ canister_id: e.Principal }), p = e.Record({ archives: e.Vec(u) }), m = e.Nat, C = e.Variant({
    Int: e.Int,
    Nat: e.Nat,
    Blob: e.Vec(e.Nat8),
    Text: e.Text
  }), y = e.Nat64, b = e.Record({
    to: n,
    fee: e.Opt(m),
    memo: e.Opt(e.Vec(e.Nat8)),
    from_subaccount: e.Opt(t),
    created_at_time: e.Opt(y),
    amount: m
  }), B = e.Nat, O = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    BadBurn: e.Record({ min_burn_amount: m }),
    Duplicate: e.Record({ duplicate_of: B }),
    BadFee: e.Record({ expected_fee: m }),
    CreatedInFuture: e.Record({ ledger_time: e.Nat64 }),
    TooOld: e.Null,
    InsufficientFunds: e.Record({ balance: m })
  }), P = e.Variant({
    Ok: B,
    Err: O
  }), H = e.Record({
    utc_offset_minutes: e.Opt(e.Int16),
    language: e.Text
  }), N = e.Record({
    metadata: H,
    device_spec: e.Opt(
      e.Variant({
        GenericDisplay: e.Null,
        LineDisplay: e.Record({
          characters_per_line: e.Nat16,
          lines_per_page: e.Nat16
        })
      })
    )
  }), te = e.Record({
    arg: e.Vec(e.Nat8),
    method: e.Text,
    user_preferences: N
  }), Be = e.Variant({
    LineDisplayMessage: e.Record({
      pages: e.Vec(e.Record({ lines: e.Vec(e.Text) }))
    }),
    GenericDisplayMessage: e.Text
  }), V = e.Record({
    metadata: H,
    consent_message: Be
  }), j = e.Record({ description: e.Text }), ne = e.Variant({
    GenericError: e.Record({
      description: e.Text,
      error_code: e.Nat
    }),
    InsufficientPayment: j,
    UnsupportedCanisterCall: j,
    ConsentMessageUnavailable: j
  }), be = e.Variant({
    Ok: V,
    Err: ne
  }), me = e.Record({
    account: n,
    spender: n
  }), $e = e.Record({
    allowance: m,
    expires_at: e.Opt(y)
  }), G = e.Record({
    fee: e.Opt(m),
    memo: e.Opt(e.Vec(e.Nat8)),
    from_subaccount: e.Opt(t),
    created_at_time: e.Opt(y),
    amount: m,
    expected_allowance: e.Opt(m),
    expires_at: e.Opt(y),
    spender: n
  }), et = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    Duplicate: e.Record({ duplicate_of: B }),
    BadFee: e.Record({ expected_fee: m }),
    AllowanceChanged: e.Record({ current_allowance: m }),
    CreatedInFuture: e.Record({ ledger_time: e.Nat64 }),
    TooOld: e.Null,
    Expired: e.Record({ ledger_time: e.Nat64 }),
    InsufficientFunds: e.Record({ balance: m })
  }), tt = e.Variant({
    Ok: B,
    Err: et
  }), nt = e.Record({
    to: n,
    fee: e.Opt(m),
    spender_subaccount: e.Opt(t),
    from: n,
    memo: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(y),
    amount: m
  }), at = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    InsufficientAllowance: e.Record({ allowance: m }),
    BadBurn: e.Record({ min_burn_amount: m }),
    Duplicate: e.Record({ duplicate_of: B }),
    BadFee: e.Record({ expected_fee: m }),
    CreatedInFuture: e.Record({ ledger_time: y }),
    TooOld: e.Null,
    InsufficientFunds: e.Record({ balance: m })
  }), Je = e.Variant({
    Ok: B,
    Err: at
  }), U = e.Nat64, we = e.Record({
    start: U,
    length: e.Nat64
  }), xe = e.Nat64, oe = e.Record({ timestamp_nanos: e.Nat64 }), ze = e.Variant({
    Approve: e.Record({
      fee: i,
      from: d,
      allowance_e8s: e.Int,
      allowance: i,
      expected_allowance: e.Opt(i),
      expires_at: e.Opt(oe),
      spender: d
    }),
    Burn: e.Record({
      from: d,
      amount: i,
      spender: e.Opt(d)
    }),
    Mint: e.Record({ to: d, amount: i }),
    Transfer: e.Record({
      to: d,
      fee: i,
      from: d,
      amount: i,
      spender: e.Opt(e.Vec(e.Nat8))
    })
  }), rt = e.Record({
    memo: xe,
    icrc1_memo: e.Opt(e.Vec(e.Nat8)),
    operation: e.Opt(ze),
    created_at_time: oe
  }), We = e.Record({
    transaction: rt,
    timestamp: oe,
    parent_hash: e.Opt(e.Vec(e.Nat8))
  }), ct = e.Record({ blocks: e.Vec(We) }), Ye = e.Variant({
    BadFirstBlockIndex: e.Record({
      requested_index: U,
      first_valid_index: U
    }),
    Other: e.Record({
      error_message: e.Text,
      error_code: e.Nat64
    })
  }), it = e.Variant({
    Ok: ct,
    Err: Ye
  }), ot = e.Func(
    [we],
    [it],
    ["query"]
  ), st = e.Record({
    callback: ot,
    start: U,
    length: e.Nat64
  }), lt = e.Record({
    certificate: e.Opt(e.Vec(e.Nat8)),
    blocks: e.Vec(We),
    chain_length: e.Nat64,
    first_block_index: U,
    archived_blocks: e.Vec(st)
  }), dt = e.Record({
    callback: e.Func(
      [we],
      [
        e.Variant({
          Ok: e.Vec(e.Vec(e.Nat8)),
          Err: Ye
        })
      ],
      ["query"]
    ),
    start: e.Nat64,
    length: e.Nat64
  }), At = e.Record({
    certificate: e.Opt(e.Vec(e.Nat8)),
    blocks: e.Vec(e.Vec(e.Nat8)),
    chain_length: e.Nat64,
    first_block_index: e.Nat64,
    archived_blocks: e.Vec(dt)
  }), pt = e.Record({
    to: l,
    fee: i,
    memo: xe,
    from_subaccount: e.Opt(t),
    created_at_time: e.Opt(oe),
    amount: i
  }), ut = e.Record({
    to: d,
    fee: i,
    memo: xe,
    from_subaccount: e.Opt(t),
    created_at_time: e.Opt(oe),
    amount: i
  }), ft = e.Variant({
    TxTooOld: e.Record({ allowed_window_nanos: e.Nat64 }),
    BadFee: e.Record({ expected_fee: i }),
    TxDuplicate: e.Record({ duplicate_of: U }),
    TxCreatedInFuture: e.Null,
    InsufficientFunds: e.Record({ balance: i })
  }), Ln = e.Variant({
    Ok: U,
    Err: ft
  }), Dn = e.Record({}), _n = e.Record({ transfer_fee: i });
  return e.Service({
    account_balance: e.Func([f], [i], ["query"]),
    account_balance_dfx: e.Func(
      [g],
      [i],
      ["query"]
    ),
    account_identifier: e.Func([n], [d], ["query"]),
    archives: e.Func([], [p], ["query"]),
    decimals: e.Func(
      [],
      [e.Record({ decimals: e.Nat32 })],
      ["query"]
    ),
    icrc10_supported_standards: e.Func(
      [],
      [e.Vec(e.Record({ url: e.Text, name: e.Text }))],
      ["query"]
    ),
    icrc1_balance_of: e.Func([n], [m], ["query"]),
    icrc1_decimals: e.Func([], [e.Nat8], ["query"]),
    icrc1_fee: e.Func([], [m], ["query"]),
    icrc1_metadata: e.Func(
      [],
      [e.Vec(e.Tuple(e.Text, C))],
      ["query"]
    ),
    icrc1_minting_account: e.Func([], [e.Opt(n)], ["query"]),
    icrc1_name: e.Func([], [e.Text], ["query"]),
    icrc1_supported_standards: e.Func(
      [],
      [e.Vec(e.Record({ url: e.Text, name: e.Text }))],
      ["query"]
    ),
    icrc1_symbol: e.Func([], [e.Text], ["query"]),
    icrc1_total_supply: e.Func([], [m], ["query"]),
    icrc1_transfer: e.Func([b], [P], []),
    icrc21_canister_call_consent_message: e.Func(
      [te],
      [be],
      []
    ),
    icrc2_allowance: e.Func([me], [$e], ["query"]),
    icrc2_approve: e.Func([G], [tt], []),
    icrc2_transfer_from: e.Func(
      [nt],
      [Je],
      []
    ),
    is_ledger_ready: e.Func([], [e.Bool], ["query"]),
    name: e.Func([], [e.Record({ name: e.Text })], ["query"]),
    query_blocks: e.Func(
      [we],
      [lt],
      ["query"]
    ),
    query_encoded_blocks: e.Func(
      [we],
      [At],
      ["query"]
    ),
    send_dfx: e.Func([pt], [U], []),
    symbol: e.Func([], [e.Record({ symbol: e.Text })], ["query"]),
    transfer: e.Func([ut], [Ln], []),
    transfer_fee: e.Func([Dn], [_n], ["query"])
  });
}, L2 = ({ IDL: e }) => {
  const t = e.Rec(), n = e.Rec(), r = e.Rec(), c = e.Record({
    num_blocks_to_archive: e.Opt(e.Nat64),
    max_transactions_per_response: e.Opt(e.Nat64),
    trigger_threshold: e.Opt(e.Nat64),
    more_controller_ids: e.Opt(e.Vec(e.Principal)),
    max_message_size_bytes: e.Opt(e.Nat64),
    cycles_for_archive_creation: e.Opt(e.Nat64),
    node_max_memory_size_bytes: e.Opt(e.Nat64),
    controller_id: e.Opt(e.Principal)
  }), i = e.Variant({
    Int: e.Int,
    Nat: e.Nat,
    Blob: e.Vec(e.Nat8),
    Text: e.Text
  }), l = e.Vec(e.Nat8), o = e.Record({
    owner: e.Principal,
    subaccount: e.Opt(l)
  }), A = e.Variant({
    SetTo: o,
    Unset: e.Null
  }), s = e.Record({ icrc2: e.Bool }), d = e.Record({
    change_archive_options: e.Opt(c),
    token_symbol: e.Opt(e.Text),
    transfer_fee: e.Opt(e.Nat),
    metadata: e.Opt(e.Vec(e.Tuple(e.Text, i))),
    change_fee_collector: e.Opt(A),
    max_memo_length: e.Opt(e.Nat16),
    token_name: e.Opt(e.Text),
    feature_flags: e.Opt(s)
  }), f = e.Record({
    decimals: e.Opt(e.Nat8),
    token_symbol: e.Text,
    transfer_fee: e.Nat,
    metadata: e.Vec(e.Tuple(e.Text, i)),
    minting_account: o,
    initial_balances: e.Vec(e.Tuple(o, e.Nat)),
    fee_collector_account: e.Opt(o),
    archive_options: e.Record({
      num_blocks_to_archive: e.Nat64,
      max_transactions_per_response: e.Opt(e.Nat64),
      trigger_threshold: e.Nat64,
      more_controller_ids: e.Opt(e.Vec(e.Principal)),
      max_message_size_bytes: e.Opt(e.Nat64),
      cycles_for_archive_creation: e.Opt(e.Nat64),
      node_max_memory_size_bytes: e.Opt(e.Nat64),
      controller_id: e.Principal
    }),
    max_memo_length: e.Opt(e.Nat16),
    token_name: e.Text,
    feature_flags: e.Opt(s)
  });
  e.Variant({
    Upgrade: e.Opt(d),
    Init: f
  });
  const g = e.Nat, u = e.Record({
    block_range_end: g,
    canister_id: e.Principal,
    block_range_start: g
  }), p = e.Record({
    start: g,
    length: e.Nat
  }), m = e.Vec(e.Tuple(e.Text, r));
  r.fill(
    e.Variant({
      Int: e.Int,
      Map: m,
      Nat: e.Nat,
      Nat64: e.Nat64,
      Blob: e.Vec(e.Nat8),
      Text: e.Text,
      Array: e.Vec(r)
    })
  );
  const C = r, y = e.Record({ blocks: e.Vec(C) }), b = e.Func(
    [p],
    [y],
    ["query"]
  ), B = e.Record({
    certificate: e.Opt(e.Vec(e.Nat8)),
    first_index: g,
    blocks: e.Vec(C),
    chain_length: e.Nat64,
    archived_blocks: e.Vec(
      e.Record({
        callback: b,
        start: g,
        length: e.Nat
      })
    )
  }), O = e.Record({
    certificate: e.Opt(e.Vec(e.Nat8)),
    hash_tree: e.Vec(e.Nat8)
  }), P = e.Nat, H = e.Record({
    start: P,
    length: e.Nat
  }), N = e.Nat64, te = e.Record({
    from: o,
    memo: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(N),
    amount: e.Nat,
    spender: e.Opt(o)
  }), Be = e.Record({
    to: o,
    memo: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(N),
    amount: e.Nat
  }), V = e.Record({
    fee: e.Opt(e.Nat),
    from: o,
    memo: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(N),
    amount: e.Nat,
    expected_allowance: e.Opt(e.Nat),
    expires_at: e.Opt(N),
    spender: o
  }), j = e.Record({
    to: o,
    fee: e.Opt(e.Nat),
    from: o,
    memo: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(N),
    amount: e.Nat,
    spender: e.Opt(o)
  }), ne = e.Record({
    burn: e.Opt(te),
    kind: e.Text,
    mint: e.Opt(Be),
    approve: e.Opt(V),
    timestamp: N,
    transfer: e.Opt(j)
  }), be = e.Record({
    transactions: e.Vec(ne)
  }), me = e.Func(
    [H],
    [be],
    ["query"]
  ), $e = e.Record({
    first_index: P,
    log_length: e.Nat,
    transactions: e.Vec(ne),
    archived_transactions: e.Vec(
      e.Record({
        callback: me,
        start: P,
        length: e.Nat
      })
    )
  }), G = e.Nat, et = e.Record({ url: e.Text, name: e.Text }), tt = e.Record({
    to: o,
    fee: e.Opt(G),
    memo: e.Opt(e.Vec(e.Nat8)),
    from_subaccount: e.Opt(l),
    created_at_time: e.Opt(N),
    amount: G
  }), nt = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    BadBurn: e.Record({ min_burn_amount: G }),
    Duplicate: e.Record({ duplicate_of: g }),
    BadFee: e.Record({ expected_fee: G }),
    CreatedInFuture: e.Record({ ledger_time: N }),
    TooOld: e.Null,
    InsufficientFunds: e.Record({ balance: G })
  }), at = e.Variant({
    Ok: g,
    Err: nt
  }), Je = e.Record({
    utc_offset_minutes: e.Opt(e.Int16),
    language: e.Text
  }), U = e.Record({
    metadata: Je,
    device_spec: e.Opt(
      e.Variant({
        GenericDisplay: e.Null,
        LineDisplay: e.Record({
          characters_per_line: e.Nat16,
          lines_per_page: e.Nat16
        })
      })
    )
  }), we = e.Record({
    arg: e.Vec(e.Nat8),
    method: e.Text,
    user_preferences: U
  }), xe = e.Variant({
    LineDisplayMessage: e.Record({
      pages: e.Vec(e.Record({ lines: e.Vec(e.Text) }))
    }),
    GenericDisplayMessage: e.Text
  }), oe = e.Record({
    metadata: Je,
    consent_message: xe
  }), ze = e.Record({ description: e.Text }), rt = e.Variant({
    GenericError: e.Record({
      description: e.Text,
      error_code: e.Nat
    }),
    InsufficientPayment: ze,
    UnsupportedCanisterCall: ze,
    ConsentMessageUnavailable: ze
  }), We = e.Variant({
    Ok: oe,
    Err: rt
  }), ct = e.Record({
    account: o,
    spender: o
  }), Ye = e.Record({
    allowance: e.Nat,
    expires_at: e.Opt(N)
  }), it = e.Record({
    fee: e.Opt(e.Nat),
    memo: e.Opt(e.Vec(e.Nat8)),
    from_subaccount: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(N),
    amount: e.Nat,
    expected_allowance: e.Opt(e.Nat),
    expires_at: e.Opt(N),
    spender: o
  }), ot = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    Duplicate: e.Record({ duplicate_of: g }),
    BadFee: e.Record({ expected_fee: e.Nat }),
    AllowanceChanged: e.Record({ current_allowance: e.Nat }),
    CreatedInFuture: e.Record({ ledger_time: N }),
    TooOld: e.Null,
    Expired: e.Record({ ledger_time: N }),
    InsufficientFunds: e.Record({ balance: e.Nat })
  }), st = e.Variant({
    Ok: g,
    Err: ot
  }), lt = e.Record({
    to: o,
    fee: e.Opt(G),
    spender_subaccount: e.Opt(l),
    from: o,
    memo: e.Opt(e.Vec(e.Nat8)),
    created_at_time: e.Opt(N),
    amount: G
  }), dt = e.Variant({
    GenericError: e.Record({
      message: e.Text,
      error_code: e.Nat
    }),
    TemporarilyUnavailable: e.Null,
    InsufficientAllowance: e.Record({ allowance: G }),
    BadBurn: e.Record({ min_burn_amount: G }),
    Duplicate: e.Record({ duplicate_of: g }),
    BadFee: e.Record({ expected_fee: G }),
    CreatedInFuture: e.Record({ ledger_time: N }),
    TooOld: e.Null,
    InsufficientFunds: e.Record({ balance: G })
  }), At = e.Variant({
    Ok: g,
    Err: dt
  }), pt = e.Record({ from: e.Opt(e.Principal) }), ut = e.Vec(
    e.Record({
      end: e.Nat,
      canister_id: e.Principal,
      start: e.Nat
    })
  );
  n.fill(
    e.Variant({
      Int: e.Int,
      Map: e.Vec(e.Tuple(e.Text, n)),
      Nat: e.Nat,
      Blob: e.Vec(e.Nat8),
      Text: e.Text,
      Array: e.Vec(n)
    })
  ), t.fill(
    e.Record({
      log_length: e.Nat,
      blocks: e.Vec(e.Record({ id: e.Nat, block: n })),
      archived_blocks: e.Vec(
        e.Record({
          args: e.Vec(p),
          callback: e.Func(
            [e.Vec(p)],
            [t],
            ["query"]
          )
        })
      )
    })
  );
  const ft = e.Record({
    certificate: e.Vec(e.Nat8),
    hash_tree: e.Vec(e.Nat8)
  });
  return e.Service({
    archives: e.Func([], [e.Vec(u)], ["query"]),
    get_blocks: e.Func([p], [B], ["query"]),
    get_data_certificate: e.Func([], [O], ["query"]),
    get_transactions: e.Func(
      [H],
      [$e],
      ["query"]
    ),
    icrc10_supported_standards: e.Func(
      [],
      [e.Vec(e.Record({ url: e.Text, name: e.Text }))],
      ["query"]
    ),
    icrc1_balance_of: e.Func([o], [G], ["query"]),
    icrc1_decimals: e.Func([], [e.Nat8], ["query"]),
    icrc1_fee: e.Func([], [G], ["query"]),
    icrc1_metadata: e.Func(
      [],
      [e.Vec(e.Tuple(e.Text, i))],
      ["query"]
    ),
    icrc1_minting_account: e.Func([], [e.Opt(o)], ["query"]),
    icrc1_name: e.Func([], [e.Text], ["query"]),
    icrc1_supported_standards: e.Func(
      [],
      [e.Vec(et)],
      ["query"]
    ),
    icrc1_symbol: e.Func([], [e.Text], ["query"]),
    icrc1_total_supply: e.Func([], [G], ["query"]),
    icrc1_transfer: e.Func([tt], [at], []),
    icrc21_canister_call_consent_message: e.Func(
      [we],
      [We],
      []
    ),
    icrc2_allowance: e.Func([ct], [Ye], ["query"]),
    icrc2_approve: e.Func([it], [st], []),
    icrc2_transfer_from: e.Func(
      [lt],
      [At],
      []
    ),
    icrc3_get_archives: e.Func(
      [pt],
      [ut],
      ["query"]
    ),
    icrc3_get_blocks: e.Func(
      [e.Vec(p)],
      [t],
      ["query"]
    ),
    icrc3_get_tip_certificate: e.Func(
      [],
      [e.Opt(ft)],
      ["query"]
    ),
    icrc3_supported_block_types: e.Func(
      [],
      [e.Vec(e.Record({ url: e.Text, block_type: e.Text }))],
      ["query"]
    ),
    is_ledger_ready: e.Func([], [e.Bool], ["query"])
  });
}, pr = (e, t) => an(e, t.decimals), D2 = (e, t) => nn(e, t.decimals), Ae = (e, t, n = !1) => {
  if (n)
    return wt(e, t.decimals, t.decimals).toString();
  if ("decimals" in t) {
    const r = ye(10).pow(t.decimals), c = ye(e.toString()).div(r);
    if (c.gte(1e4))
      return `${c.div(1e3).round().toNumber().toLocaleString()} K`;
  }
  return wt(
    e,
    t.decimals,
    t.renderedDecimalPlaces ?? 6
  ).toString();
}, ur = (e) => {
  const t = Math.floor(e / 60), n = e % 60;
  return t === 0 ? `${n} seconds` : t === 1 ? "1 minute" : n === 0 ? `${t} minutes` : `${t} minutes and ${n} seconds`;
}, Ht = (e) => new Date(Number(e / 1000000n)), fr = (e) => BigInt(e.getTime()) * 1000000n, _2 = (e) => BigInt(e.getTime()) * 1000000n, mr = (e, t = "yyyy-MM-dd HH:mm") => {
  try {
    return E2(
      Ht(e),
      Intl.DateTimeFormat().resolvedOptions().timeZone,
      t
    );
  } catch {
    return Ht(e).toISOString().slice(0, 16);
  }
}, bn = async (e, t, n) => {
  if (!("principal" in t))
    throw new v("Account identifier not supported");
  if ("Fake" in e) return 0n;
  Y && await n.agent.fetchRootKey();
  const r = $(e.Real);
  return (await ie.create({
    agent: n.agent,
    canisterId: r
  }).allowance({
    spender: {
      owner: t.principal,
      subaccount: []
    },
    account: {
      owner: n.principal,
      subaccount: []
    }
  })).allowance;
}, $2 = async (e, t, n, r, c) => {
  if (!("principal" in t))
    throw new v("Account identifier not supported");
  if ("Fake" in e) return 0n;
  const i = $(e.Real);
  return ie.create({
    agent: r.agent,
    canisterId: i
  }).approve({
    spender: {
      owner: t.principal,
      subaccount: []
    },
    amount: n,
    expires_at: _2(c)
  });
}, Ie = (e = JSON.stringify, t = JSON.parse) => ({
  serialize: e,
  deserialize: t,
  validate: (n) => t(e(n))
}), Vt = Ie(
  JSON.stringify,
  (e) => {
    let t = JSON.parse(e);
    return typeof t == "string" && (t = JSON.parse(t)), typeof t.symbol == "string" ? t.symbol = Ot(t.symbol) : typeof t.symbol == "object" && (t.symbol = Object.values(t.symbol).map((n) => typeof n == "string" ? parseInt(n, 10) : n)), typeof t.ledger_id == "string" && (t.ledger_id = M.fromText(t.ledger_id)), "__principal__" in t.ledger_id && (t.ledger_id = M.fromText(t.ledger_id.__principal__)), {
      decimals: t.decimals,
      ledger_id: t.ledger_id,
      symbol: t.symbol
    };
  }
), jt = Ie(), T = Ie(
  (e) => JSON.stringify(
    R(e)({
      ICP: () => ({ ICP: null }),
      CKETHToken: (t) => ({
        CKETHToken: jt.validate(t)
      }),
      BTC: () => ({ BTC: null }),
      GenericICRC1: (t) => ({
        GenericICRC1: Vt.validate(t)
      })
    })
  ),
  (e) => R(JSON.parse(e))({
    ICP: () => ({ ICP: null }),
    CKETHToken: (t) => ({
      CKETHToken: jt.validate(t)
    }),
    BTC: (t) => ({ BTC: null }),
    GenericICRC1: (t) => ({
      GenericICRC1: Vt.validate(t)
    })
  })
), K = Ie(
  (e) => JSON.stringify(
    R(e)({
      Real: (t) => ({
        Real: T.validate(t)
      }),
      Fake: () => ({
        Fake: null
      })
    })
  ),
  (e) => R(JSON.parse(e))({
    Real: (t) => ({
      Real: T.validate(t)
    }),
    Fake: () => ({
      Fake: null
    })
  })
), e0 = (e, t) => e === void 0 && t === void 0 ? !0 : e === void 0 || t === void 0 ? !1 : e.compareTo(t) === "eq", xn = (e, t) => e === void 0 && t === void 0 ? !0 : e === void 0 || t === void 0 ? !1 : e.decimals === t.decimals && e0(e.ledger_id, t.ledger_id) && e.symbol === t.symbol, zn = (e, t) => e === void 0 && t === void 0 ? !0 : e === void 0 || t === void 0 ? !1 : "BTC" in e ? "BTC" in t : "ETH" in e ? "ETH" in t : "USDC" in e ? "USDC" in t : "USDT" in e ? "USDT" in t : !1, kn = (e, t) => e === void 0 && t === void 0 ? !0 : e === void 0 || t === void 0 ? !1 : "ICP" in e ? "ICP" in t : "BTC" in e ? "BTC" in t : "CKETHToken" in e ? "CKETHToken" in t ? zn(e.CKETHToken, t.CKETHToken) : !1 : "GenericICRC1" in e && "GenericICRC1" in t ? xn(e.GenericICRC1, t.GenericICRC1) : !1, On = (e, t) => e === void 0 && t === void 0 ? !0 : e === void 0 || t === void 0 ? !1 : "Fake" in e ? "Fake" in t : "Fake" in t ? !1 : kn(e.Real, t.Real), Nn = async (e, t, n, r) => {
  if ("Fake" in e) return 0n;
  const c = $(e.Real);
  if ("ICP" in e.Real) {
    const l = $(e.Real);
    let o;
    if ("principal" in t)
      o = re.fromPrincipal({
        principal: t.principal
      });
    else if ("accountIdentifier" in t)
      o = t.accountIdentifier;
    else
      throw new v("Invalid receiver address");
    return zt.create({
      agent: r.agent,
      canisterId: l
    }).transfer({
      to: o,
      amount: n
    });
  }
  if (!("principal" in t))
    throw new v("Receiver must have a principal for ICRC transfers");
  return ie.create({
    agent: r.agent,
    canisterId: c
  }).transfer({
    to: {
      owner: t.principal,
      subaccount: []
    },
    amount: n
  });
}, t0 = Ne, n0 = (e) => {
  const { authData: t } = W(), n = D();
  return Z({
    queryKey: [
      "currencyManager",
      K.serialize(e),
      t ? t.principal.toText() : "unauthenticaded"
    ],
    queryFn: async () => {
      const r = t?.agent ?? he.createSync({ host: t0 });
      return Y && await r.fetchRootKey(), await w0(r, e);
    },
    initialData: {
      meta: Ue(n).meta,
      currencyType: e
    }
  }).data;
}, a0 = (e) => {
  const t = n0(e);
  if (!t)
    throw new Error(
      `Currency manager for ${pe(e)} not found`
    );
  return t;
}, ue = (e) => {
  const t = D();
  return Z({
    queryKey: [
      "currencyManagerMeta",
      K.serialize(e)
    ],
    queryFn: async () => "Fake" in e ? Ue(t).meta : await Sn(e.Real),
    throwOnError: !0,
    initialData: R(e)({
      Fake: () => Ue(t).meta,
      Real: (n) => Gn(n)
    })
  }).data;
}, Nt = h(
  ({ meta: e, className: t }) => e.icon ? /* @__PURE__ */ a(
    "span",
    {
      className: _(t, "inline-flex", "flex-shrink-0 flex-grow-0 rounded-[2px] overflow-hidden", {
        "size-5": !t || !t.includes("size-") || !t.includes("h-") || !t.includes("w-")
      }),
      children: /* @__PURE__ */ a(
        "img",
        {
          src: e.icon,
          alt: e.metadata?.name ?? e.symbol,
          className: "object-contain w-full"
        }
      )
    }
  ) : /* @__PURE__ */ a(
    "span",
    {
      className: _(
        "type-tiny font-medium",
        { "text-animation-shimmer": !e.isFetched }
      ),
      children: e.symbol.startsWith("ck") ? e.symbol.slice(2) : e.symbol
    }
  ),
  (e, t) => e.className === t.className && e.meta.icon === t.meta.icon && e.meta.symbol === t.meta.symbol && e.meta.metadata?.name === t.meta.metadata?.name
), wr = h(
  ({ ckToken: e, className: t }) => /* @__PURE__ */ a(Me, { className: t, currencyType: { Real: { CKETHToken: e } } }),
  (e, t) => zn(e.ckToken, t.ckToken) && e.className === t.className
), gr = h(
  ({ token: e, className: t }) => /* @__PURE__ */ a(Me, { className: t, currencyType: { Real: { GenericICRC1: e } } }),
  (e, t) => xn(e.token, t.token) && e.className === t.className
), r0 = h(
  ({ currency: e, className: t }) => /* @__PURE__ */ a(Me, { className: t, currencyType: { Real: e } }),
  (e, t) => e.className === t.className && kn(e.currency, t.currency)
), Me = h(
  ({ currencyType: e, className: t }) => {
    const n = ue(e);
    return /* @__PURE__ */ a(Nt, { className: t, meta: n });
  },
  (e, t) => e.className === t.className && On(e.currencyType, t.currencyType)
), c0 = h(({ currencyType: e }) => {
  const { metadata: t } = ue(e), n = z(() => t?.name ?? pe(e), [t]);
  return /* @__PURE__ */ a(x, { children: n.startsWith("ck") ? n.slice(2) : n });
}), yr = h(({ value: e }) => /* @__PURE__ */ a(x, { children: pe({ Real: { GenericICRC1: e } }) })), hr = h(({ value: e }) => /* @__PURE__ */ a(x, { children: pe({ Real: { CKETHToken: e } }) })), I = h(({ currencyType: e }) => /* @__PURE__ */ a(x, { children: pe(e) })), Ce = h(({ currencyType: e }) => /* @__PURE__ */ w("div", { className: "flex flex-row gap-2 justify-start items-center", children: [
  e && /* @__PURE__ */ a(Me, { className: "size-5", currencyType: e }),
  /* @__PURE__ */ a(I, { currencyType: e })
] })), i0 = (e) => Math.floor(e.valueOf()) === e.valueOf() ? 0 : e.toString().split(".")[1]?.length || 0, o0 = h(
  ({
    hideSymbol: e,
    size: t = "medium",
    reverse: n = !1,
    className: r,
    currencyValue: c,
    currencyType: i,
    forceFlex: l,
    ...o
  }) => {
    const A = z(
      () => c ? Ae(c, o) : "0",
      [c, o]
    ), s = tn(null);
    return X(() => {
      if (o.decimals > 9) {
        if (!s.current) return;
        s.current.textContent = A;
        return;
      }
      if (A.toUpperCase().indexOf("K") !== -1) {
        s.current && (s.current.textContent = A);
        return;
      }
      const d = parseFloat(s.current?.textContent || A + ""), f = parseFloat(A + ""), g = Math.abs(d - f);
      if (isNaN(d) || isNaN(f)) return;
      if (f === 1 / 0 || f === -1 / 0) {
        if (!s.current) return;
        s.current.textContent = "Infinity";
        return;
      }
      const u = M2(d, f, {
        duration: Math.min(1, Math.max(g / 500, 9)) * 0.3,
        ease: "anticipate",
        onUpdate(p) {
          s.current && (s.current.textContent = p.toFixed(i0(f)));
        },
        onComplete() {
          s.current && (s.current.textContent = f.toString());
        }
      });
      return () => u?.stop();
    }, [A]), /* @__PURE__ */ w(
      "div",
      {
        className: _(
          r,
          l ? "flex" : "inline-flex",
          "justify-center items-center shrink-0",
          {
            "gap-1": t === "small",
            "gap-2": t === "medium" || t === "big"
          },
          n ? "flex-row-reverse" : "flex-row"
        ),
        children: [
          !e && /* @__PURE__ */ a(
            Nt,
            {
              className: _(l ? "flex" : "inline-flex", {
                "w-[24px] h-[24px]": t === "medium",
                "w-[32px] h-[32px]": t === "big",
                "w-[12px] h-[12px] scale-[1.5]": t === "small"
              }),
              meta: o
            }
          ),
          /* @__PURE__ */ a(
            "span",
            {
              ref: s,
              className: _("flex", {
                "type-header": t === "big",
                "type-button-2": t === "medium",
                "type-button-3": t === "small"
              })
            }
          )
        ]
      }
    );
  },
  (e, t) => e.hideSymbol === t.hideSymbol && e.size === t.size && e.reverse === t.reverse && e.forceFlex === t.forceFlex && e.className === t.className && e.currencyValue === t.currencyValue && On(e.currencyType, t.currencyType) && e.decimals === t.decimals && e.renderedDecimalPlaces === t.renderedDecimalPlaces && e.symbol === t.symbol && e.isFetched === t.isFetched && e.icon === t.icon
), Qt = h((e) => {
  const t = ue(e.currencyType), n = z(() => {
    if (!t.alternatives || !e.currencyValue) return t;
    const r = Ae(e.currencyValue, t);
    return Object.values(t.alternatives).find((c) => {
      const i = Ae(
        e.currencyValue ?? 0n,
        c
      );
      return r.length > i.length || r.length === i.length && c.decimals < t.decimals;
    }) || t;
  }, [t, e.currencyValue]);
  return /* @__PURE__ */ a(o0, { ...e, ...n });
}), J = h(
  ({ className: e, variant: t = "inline", forceFlex: n = !1, ...r }) => t === "inline" ? /* @__PURE__ */ a(Qt, { ...r, forceFlex: n, className: e }) : /* @__PURE__ */ a(
    "div",
    {
      className: _(
        "inline-flex flex-row items-center material p-2 rounded-full",
        e
      ),
      children: /* @__PURE__ */ a(Qt, { ...r })
    }
  )
), Le = (e) => ue(e).transactionFee, s0 = Ne, En = L({
  setWalletType: () => {
  }
}), l0 = (e, t) => "ICP" in e ? {
  methodName: "send_dfx",
  idl: I2,
  destination: re.fromPrincipal({
    principal: t
  }).toHex()
} : {
  methodName: "icrc1_transfer",
  idl: L2,
  destination: t
}, Et = () => ee(En), Pn = (e, t, n) => {
  const { walletType: r } = Et(), c = Le(e), { addToast: i } = qe();
  return Q({
    mutationFn: async (l) => {
      if (!r) throw new v("Wallet not found");
      if (!("ic" in window) || !(r in window.ic))
        throw new $n(r);
      switch (r) {
        case "plug":
        case "bitfinityWallet":
          console.log("Connected ing..", r);
          try {
            await window.ic[r].isConnected() || await window.ic[r].requestConnect();
          } catch (o) {
            throw console.error("Error connecting to wallet", o), new v("Failed to connect to wallet. Please try again.");
          }
          break;
        default:
          throw new v(`${pe(e)} not supported by ${r}`);
      }
      return await window.ic[r].isConnected() || await window.ic[r].requestConnect({ host: s0 }), await new Promise((o, A) => {
        if (!t) return A("No destination principal found");
        if ("Fake" in e) throw new v("Cannot transfer fake currency");
        const { methodName: s, idl: d, destination: f } = l0(e.Real, t), g = $(e.Real).toText();
        let u = [];
        "ICP" in e.Real ? u = [{
          to: re.fromPrincipal({
            principal: t
          }).toHex(),
          fee: { e8s: c },
          amount: { e8s: l },
          memo: BigInt(0),
          from_subaccount: [],
          created_at_time: [
            { timestamp_nanos: BigInt(Date.now()) * 1000000n }
          ]
        }] : u = [{
          to: {
            owner: t,
            subaccount: []
          },
          fee: [c],
          amount: l,
          memo: [],
          from_subaccount: [],
          created_at_time: [BigInt(Date.now()) * 1000000n]
        }];
        try {
          window.ic[r].batchTransactions([{
            idl: d,
            canisterId: g,
            methodName: s,
            args: u,
            onSuccess: async (p) => {
              if (typeof p == "object" && "Err" in p)
                return A(p.Err);
              console.log("Transfer successful", p), o(p);
            },
            onFail: async (p) => {
              console.log("Somehow failed", p), A(
                new v(
                  "Transfer failed. Please check your balance and try again."
                )
              );
            }
          }]);
        } catch (p) {
          console.error("Error during transfer", p), A(new v("Transfer failed. Please try again later."));
        }
      });
    },
    onSuccess: (l, o) => {
      S._balanceModalBalance.invalidate(e), i({
        children: /* @__PURE__ */ w(x, { children: [
          /* @__PURE__ */ a("span", { className: "flex flex-row mr-1", children: /* @__PURE__ */ a(J, { currencyType: e, variant: "inline", currencyValue: o }) }),
          /* @__PURE__ */ a(I, { currencyType: e }),
          ` ${n ?? "has been transferred"}`
        ] })
      });
    }
  });
}, Mn = L({
  setAllowance: async () => {
    throw new Error("Context not provided");
  },
  requireAllowance: async () => {
    throw new Error("Context not provided");
  }
}), d0 = ["ic", "btc", "eth"], A0 = (e) => M.fromText(
  R(e)({
    ETH: () => "ss2fx-dyaaa-aaaar-qacoq-cai",
    USDC: () => "xevnm-gaaaa-aaaar-qafnq-cai",
    USDT: () => "cngnf-vqaaa-aaaar-qag4q-cai"
  })
), $ = (e) => R(e)({
  ICP: () => M.fromText("ryjl3-tyaaa-aaaaa-aaaba-cai"),
  GenericICRC1: (t) => t.ledger_id,
  CKETHToken: (t) => A0(t),
  BTC: () => M.fromText(x0)
}), Sn = async (e, t = he.createSync({
  host: je
})) => {
  Y && await t.fetchRootKey();
  const n = ie.create({
    agent: t,
    canisterId: $(e)
  }), r = await n.metadata({}), c = kt(r);
  if (!c)
    throw new Error(`Metadata not found for ${ve(e)}`);
  return Gn(
    e,
    {
      ...c,
      fee: await n.transactionFee({}) ?? c.fee
    },
    !0
  );
}, p0 = "data:image/png;base64,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", u0 = "data:image/png;base64,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", f0 = "data:image/png;base64,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", Zt = {
  NFIDW: p0,
  YUKU: u0,
  DCD: f0
}, Gn = (e, t, n = !1) => R(e)({
  ICP: () => ({
    decimals: t?.decimals ?? 8,
    thousands: 10 ** (t?.decimals ?? 8),
    transactionFee: t?.fee ?? 10000n,
    metadata: t,
    renderedDecimalPlaces: 4,
    icon: Bn,
    symbol: "ICP",
    isFetched: n
  }),
  GenericICRC1: (r) => {
    const c = t?.symbol ?? Ot(r.symbol), i = (c in Zt ? Zt[c] : void 0) ?? t?.icon;
    return {
      metadata: t,
      decimals: t?.decimals ?? r.decimals,
      thousands: 10 ** (t?.decimals ?? r.decimals),
      transactionFee: t?.fee ?? 10000n,
      icon: i,
      symbol: c,
      isFetched: n
    };
  },
  CKETHToken: (r) => R(r)({
    ETH: () => ({
      decimals: t?.decimals ?? 18,
      thousands: 10 ** (t?.decimals ?? 18),
      transactionFee: t?.fee ?? 10000n,
      renderedDecimalPlaces: 6,
      metadata: t,
      icon: Q2,
      symbol: "ETH",
      isFetched: n
    }),
    USDC: () => ({
      decimals: t?.decimals ?? 6,
      thousands: 10 ** (t?.decimals ?? 6),
      transactionFee: t?.fee ?? 10000n,
      renderedDecimalPlaces: 2,
      metadata: t,
      icon: K2,
      symbol: "USDC",
      isFetched: n
    }),
    USDT: () => ({
      decimals: t?.decimals ?? 6,
      thousands: 10 ** (t?.decimals ?? 6),
      transactionFee: t?.fee ?? 10000n,
      renderedDecimalPlaces: 2,
      metadata: t,
      icon: q2,
      symbol: "USDT",
      isFetched: n
    })
  }),
  BTC: () => ({
    decimals: t?.decimals ?? 8,
    thousands: 10 ** (t?.decimals ?? 8),
    transactionFee: t?.fee ?? 10000n,
    renderedDecimalPlaces: 6,
    metadata: void 0,
    icon: j2,
    symbol: "BTC",
    isFetched: n,
    alternatives: {
      satoshis: {
        decimals: 0,
        thousands: 1,
        transactionFee: t?.fee ?? 10000n,
        metadata: void 0,
        icon: U2,
        symbol: "sats",
        isFetched: n
      }
    }
  })
}), vt = async (e, t) => ({
  currencyType: { Real: t },
  meta: await Sn(t, e)
}), ke = async (e, t) => vt(e, {
  CKETHToken: t
}), m0 = async (e) => {
  Y && await e.fetchRootKey();
  const n = await zt.create({
    agent: e,
    canisterId: $({ ICP: null })
  }).metadata({}), r = kt(n);
  if (!r) throw new Error("Metadata not found for ICP");
  return {
    currencyType: { Real: { ICP: null } },
    meta: {
      decimals: r.decimals,
      thousands: 10 ** r.decimals,
      transactionFee: 10000n,
      metadata: r,
      icon: Bn,
      isFetched: !0,
      symbol: "ICP"
    }
  };
}, Xe = async (e, t) => R(t)({
  ICP: () => m0(e),
  GenericICRC1: async (n) => vt(e, t),
  CKETHToken: async (n) => ke(e, n),
  BTC: async () => vt(e, { BTC: null })
}), Ue = (e) => ({
  currencyType: { Fake: null },
  meta: {
    decimals: 8,
    thousands: 10 ** 8,
    transactionFee: 10000n,
    icon: e ? Z2 : X2,
    symbol: "IN-GAME",
    // We don't fetch metadata for in game currencies
    isFetched: !0
  }
}), w0 = async (e, t) => {
  const n = D();
  return R(t)({
    Fake: async () => Ue(n),
    Real: (r) => Xe(e, r)
  });
}, g0 = "sv3dd-oaaaa-aaaar-qacoa-cai", y0 = "xevnm-gaaaa-aaaar-qafnq-cai", h0 = 6, v0 = "sv3dd-oaaaa-aaaar-qacoa-cai", C0 = "cngnf-vqaaa-aaaar-qag4q-cai", T0 = 6, B0 = "sv3dd-oaaaa-aaaar-qacoa-cai", Rn = "ss2fx-dyaaa-aaaar-qacoq-cai", Jn = 18, b0 = "mqygn-kiaaa-aaaar-qaadq-cai", x0 = "mxzaz-hqaaa-aaaar-qaada-cai", vr = 8, z0 = (e) => R(e)({
  ETH: () => ({
    minter: M.fromText(B0),
    ledger: M.fromText(Rn),
    tokenContractAddress: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    decimals: Jn
  }),
  USDC: () => ({
    minter: M.fromText(g0),
    ledger: M.fromText(y0),
    tokenContractAddress: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    decimals: h0
  }),
  USDT: () => ({
    minter: M.fromText(v0),
    ledger: M.fromText(C0),
    tokenContractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    decimals: T0
  })
}), k0 = [
  {
    constant: !0,
    inputs: [],
    name: "name",
    outputs: [{ name: "", type: "string" }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      { name: "_spender", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      { name: "_from", type: "address" },
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !0,
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", type: "string" }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: !1,
    inputs: [
      { name: "_to", type: "address" },
      { name: "_value", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ name: "", type: "bool" }],
    payable: !1,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: !0,
    inputs: [
      { name: "_owner", type: "address" },
      { name: "_spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ name: "", type: "uint256" }],
    payable: !1,
    stateMutability: "view",
    type: "function"
  },
  { payable: !0, stateMutability: "payable", type: "fallback" },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, name: "owner", type: "address" },
      { indexed: !0, name: "spender", type: "address" },
      { indexed: !1, name: "value", type: "uint256" }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: !1,
    inputs: [
      { indexed: !0, name: "from", type: "address" },
      { indexed: !0, name: "to", type: "address" },
      { indexed: !1, name: "value", type: "uint256" }
    ],
    name: "Transfer",
    type: "event"
  }
], Xt = [
  {
    inputs: [
      { internalType: "address", name: "_minterAddress", type: "address" }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "AddressInsufficientBalance",
    type: "error"
  },
  { inputs: [], name: "FailedInnerCall", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error"
  },
  {
    anonymous: !1,
    inputs: [
      {
        indexed: !0,
        internalType: "address",
        name: "erc20ContractAddress",
        type: "address"
      },
      {
        indexed: !0,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: !1,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: !0,
        internalType: "bytes32",
        name: "principal",
        type: "bytes32"
      },
      {
        indexed: !1,
        internalType: "bytes32",
        name: "subaccount",
        type: "bytes32"
      }
    ],
    name: "ReceivedEthOrErc20",
    type: "event"
  },
  {
    inputs: [
      { internalType: "address", name: "erc20Address", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "bytes32", name: "principal", type: "bytes32" },
      { internalType: "bytes32", name: "subaccount", type: "bytes32" }
    ],
    name: "depositErc20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32", name: "principal", type: "bytes32" },
      { internalType: "bytes32", name: "subaccount", type: "bytes32" }
    ],
    name: "depositEth",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "getMinterAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  }
], Fe = "0x18901044688D3756C35Ed2b36D93e6a5B8e00E68";
function Ut(e) {
  const t = e.toText(), n = M.fromText(t), c = x2.fromPrincipal(n).toUint8Array();
  return "0x" + Buffer.from(c).toString("hex");
}
const Wn = L({
  isNativeShown: !0,
  setIsNativeShown: () => {
  },
  depostTransactionsHashes: {},
  withdrawalTransactionsHashes: {},
  deposit: async () => {
  },
  withdraw: async () => {
  }
}), Pt = () => ee(Wn), Yn = (e) => z(
  () => R(e)({
    ICP: () => !1,
    GenericICRC1: () => !1,
    CKETHToken: () => !0,
    BTC: () => !0
  }),
  [e]
), Se = (e) => {
  const t = Yn(e), { isNativeShown: n } = Pt();
  return z(
    () => t && n,
    [t, n]
  );
}, qt = 0.03, Ct = (e, t, n, r) => {
  try {
    if (!t) throw new v("No Wallet selected");
    if (!n) throw new v("No Account selected");
    if (!r) throw new v("You need to be logged in");
    if (!("CKETHToken" in e))
      throw new v(`${ve(e)} is not supported yet`);
    const c = z0(e.CKETHToken);
    if (!c) throw new v(`${e} is not supported yet`);
    const i = b2.create({
      agent: r.agent,
      canisterId: c.minter
    }), l = ie.create({
      agent: r.agent,
      canisterId: c.ledger
    }), o = {
      owner: i.canisterId,
      subaccount: []
    }, A = {
      owner: i.canisterId,
      subaccount: []
    }, s = new ae.BrowserProvider(t.provider), d = () => l.allowance({
      spender: o,
      account: A
    }), f = async (u) => {
      if (u < 0n) throw new v("Allowance cannot be negative");
      console.log(`Setting allowance to ${u}`);
      const p = await l.approve({
        spender: o,
        amount: u
      });
      return console.log(`Successfully set allowance to ${u}`), S.icrc_allowance.invalidate({ Real: e }), p;
    }, g = async (u) => {
      if (u === 0n) return;
      const p = (await d()).allowance, m = u - p;
      if (console.log({
        currentAllowance: p,
        allowance: u,
        requiredAllowance: m
      }), m > 0n) return f(u);
    };
    if ("BTC" in e.CKETHToken)
      throw new v("BTC is not supported yet");
    return "ETH" in e.CKETHToken ? {
      setAllowanceTo: f,
      fetchAllowance: d,
      withdraw: async (u) => {
        const p = await ke(
          r.agent,
          e.CKETHToken
        ), m = await Tt(r);
        if (u < BigInt(qt * 10 ** p.meta.decimals))
          throw new v(
            `Minimum withdrawal amount is ${qt} ETH`
          );
        return await g(u + m.ckETHToETH), i.withdrawEth({
          address: n,
          amount: u
        });
      },
      deposit: async (u) => {
        const p = await ke(
          r.agent,
          e.CKETHToken
        ), m = c.decimals - p.meta.decimals, C = u * BigInt(10 ** m), y = await s.getSigner(), b = new ae.Contract(
          Fe,
          Xt,
          y
        ), B = await y.sendTransaction({
          to: Fe,
          data: await b.interface.encodeFunctionData(
            "depositEth",
            [
              ae.hexlify(Ut(r.principal)),
              ae.hexlify(
                "0x0000000000000000000000000000000000000000000000000000000000000000"
              )
            ]
          ),
          value: C
        });
        return await B.wait(), console.log(`ETH Deposit transaction hash: ${B.hash}`), B.hash;
      }
    } : {
      setAllowanceTo: f,
      fetchAllowance: d,
      withdraw: async (u) => {
        const p = await Tt(r), m = ie.create({
          agent: r.agent,
          canisterId: M.fromText(Rn)
        }), C = p.ckERC20ToERC20;
        if (!C) throw new v("No gas price found for CKETH");
        const y = await m.allowance({
          spender: o,
          account: A
        });
        return C - y.allowance > 0n && await m.approve({
          spender: o,
          amount: C - y.allowance
        }), await g(u), i.withdrawErc20({
          address: n,
          amount: u,
          ledgerCanisterId: l.canisterId
        });
      },
      deposit: async (u) => {
        const p = await ke(
          r.agent,
          e.CKETHToken
        ), m = c.decimals - p.meta.decimals, C = u * BigInt(10 ** m);
        if (!t) throw new v("No connected wallet found");
        if (!n) throw new v("No connected account found");
        const y = await s.getSigner(), b = new ae.Contract(
          Fe,
          Xt,
          y
        );
        console.log("Processing ERC-20 deposit...");
        const O = await new ae.Contract(
          c.tokenContractAddress,
          k0,
          y
        ).approve(
          Fe,
          C
        );
        await O.wait(), console.log(`Approval transaction hash: ${O.hash}`);
        const P = await b.depositErc20(
          c.tokenContractAddress,
          C,
          ae.hexlify(Ut(r.principal)),
          ae.hexlify(
            "0x0000000000000000000000000000000000000000000000000000000000000000"
          )
        );
        return await P.wait(), console.log(`ERC-20 Deposit transaction hash: ${P.hash}`), P.hash;
      }
    };
  } catch (c) {
    return console.error(`Cannot withdraw ${e} using Chain Fusion`), {
      withdraw: async () => {
        throw c;
      },
      deposit: async () => {
        throw c;
      },
      setAllowanceTo: async () => 0n,
      fetchAllowance: async () => ({ allowance: 0n, expires_at: [] })
    };
  }
}, Fn = (e) => {
  const { authData: t } = W(), { selectedWallet: n, selectedAccount: r } = Ke();
  return z(
    () => Ct(
      e,
      n,
      r,
      t
    ),
    [e, n, r, t]
  );
}, Kt = (e) => {
  const { fetchAllowance: t } = Fn(e);
  return Z({
    queryKey: S.icrc_allowance.key({ Real: e }),
    queryFn: t,
    refetchInterval: 1e4
  }).data;
}, O0 = (e) => Fn(e).setAllowanceTo, N0 = 21000n, E0 = 10000000000000000n, Tt = async (e) => {
  const n = (await ke(e.agent, { ETH: null })).meta.decimals ?? 18, r = Jn - n, c = 10n ** BigInt(r);
  return {
    ckERC20ToERC20: E0 / c,
    ckETHToETH: N0 / c
  };
}, P0 = () => {
  const { authData: e } = W();
  return Z({
    queryKey: S.chain_fusion_transaction_fees.key(!!e),
    queryFn: () => {
      if (e)
        return Tt(e);
    }
  }).data;
}, It = "chain-fusion-show-native", M0 = "chain-fusion-transaction-deposits", S0 = "chain-fusion-transaction-withdrawals", G0 = h(
  ({ children: e }) => {
    const [t, n] = E((localStorage.getItem(It) ?? "true") === "true"), [r, c] = de(M0, {}), [i, l] = de(S0, {}), o = Ke(), { authData: A } = W();
    X(() => {
      localStorage.setItem(It, t ? "true" : "false");
    }, [t]);
    const { addToast: s } = qe(), d = Q({
      mutationFn: async ({ currency: g, amount: u }) => {
        if (!u) throw new v("No amount to withdraw found");
        const m = await (await Ct(g, o.selectedWallet, o.selectedAccount, A)).withdraw(u);
        return typeof m == "string" ? m : null;
      },
      onSuccess: (g, { currency: u }) => {
        g && l({
          ...i,
          [T.serialize(u)]: [...i[T.serialize(u)] ?? [], g]
        }), s({
          children: /* @__PURE__ */ w(x, { children: [
            /* @__PURE__ */ a("p", { children: "Withdrawal successful" }),
            g && /* @__PURE__ */ a("p", { children: /* @__PURE__ */ a("a", { href: `https://ic.rocks/transaction/${g}`, target: "_blank", rel: "noopener noreferrer", children: "View on ic.rocks" }) })
          ] })
        });
      }
    }), f = Q({
      mutationFn: async ({ currency: g, amount: u }) => {
        if (!u) throw new v("No amount to deposit found");
        const m = await (await Ct(g, o.selectedWallet, o.selectedAccount, A)).deposit(u);
        return typeof m == "string" ? m : null;
      },
      onSuccess: (g, { currency: u }) => {
        g && c({
          ...r,
          [T.serialize(u)]: [...r[T.serialize(u)] ?? [], g]
        }), s({
          children: /* @__PURE__ */ a("p", { children: "Deposit successful" })
        });
      }
    });
    return /* @__PURE__ */ a(
      Wn.Provider,
      {
        value: {
          isNativeShown: t,
          setIsNativeShown: n,
          depostTransactionsHashes: r,
          withdrawalTransactionsHashes: i,
          deposit: async (g, u) => {
            await f.mutateAsync({ currency: g, amount: u });
          },
          withdraw: async (g, u) => {
            await d.mutateAsync({ currency: g, amount: u });
          }
        },
        children: e
      }
    );
  }
), Lt = h(({
  children: e,
  fallback: t,
  network: n
}) => $0().some((c) => c === n) ? e || null : t || null), R0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='842.32007'%20height='1000.0001'%3e%3cpath%20fill='%23fff'%20d='M824.66636%20779.30363c-15.12299%2034.93724-33.02368%2067.09674-53.7638%2096.66374-28.27076%2040.3074-51.4182%2068.2078-69.25717%2083.7012-27.65347%2025.4313-57.2822%2038.4556-89.00964%2039.1963-22.77708%200-50.24539-6.4813-82.21973-19.629-32.07926-13.0861-61.55985-19.5673-88.51583-19.5673-28.27075%200-58.59083%206.4812-91.02193%2019.5673-32.48053%2013.1477-58.64639%2019.9994-78.65196%2020.6784-30.42501%201.29623-60.75123-12.0985-91.02193-40.2457-19.32039-16.8514-43.48632-45.7394-72.43607-86.6641-31.060778-43.7024-56.597041-94.37983-76.602609-152.15586C10.740416%20658.44309%200%20598.01283%200%20539.50845c0-67.01648%2014.481044-124.8172%2043.486336-173.25401C66.28194%20327.34823%2096.60818%20296.6578%20134.5638%20274.1276c37.95566-22.53016%2078.96676-34.01129%20123.1321-34.74585%2024.16591%200%2055.85633%207.47508%2095.23784%2022.166%2039.27042%2014.74029%2064.48571%2022.21538%2075.54091%2022.21538%208.26518%200%2036.27668-8.7405%2083.7629-26.16587%2044.90607-16.16001%2082.80614-22.85118%20113.85458-20.21546%2084.13326%206.78992%20147.34122%2039.95559%20189.37699%2099.70686-75.24463%2045.59122-112.46573%20109.4473-111.72502%20191.36456.67899%2063.8067%2023.82643%20116.90384%2069.31888%20159.06309%2020.61664%2019.56727%2043.64066%2034.69027%2069.2571%2045.4307-5.55531%2016.11062-11.41933%2031.54225-17.65372%2046.35662zM631.70926%2020.0057c0%2050.01141-18.27108%2096.70693-54.6897%20139.92782-43.94932%2051.38118-97.10817%2081.07162-154.75459%2076.38659-.73454-5.99983-1.16045-12.31444-1.16045-18.95003%200-48.01091%2020.9006-99.39207%2058.01678-141.40314%2018.53027-21.27094%2042.09746-38.95744%2070.67685-53.0663C578.3158%209.00229%20605.2903%201.31621%20630.65988%200c.74076%206.68575%201.04938%2013.37191%201.04938%2020.00505z'/%3e%3c/svg%3e", J0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2024.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2040%2040'%20style='enable-background:new%200%200%2040%2040;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:url(%23SVGID_1_);}%20.st1{fill:%23FFFFFF;}%20%3c/style%3e%3clinearGradient%20id='SVGID_1_'%20gradientUnits='userSpaceOnUse'%20x1='-277.375'%20y1='406.6018'%20x2='-277.375'%20y2='407.5726'%20gradientTransform='matrix(40%200%200%20-39.7778%2011115.001%2016212.334)'%3e%3cstop%20offset='0'%20style='stop-color:%230062E0'/%3e%3cstop%20offset='1'%20style='stop-color:%2319AFFF'/%3e%3c/linearGradient%3e%3cpath%20class='st0'%20d='M16.7,39.8C7.2,38.1,0,29.9,0,20C0,9,9,0,20,0s20,9,20,20c0,9.9-7.2,18.1-16.7,19.8l-1.1-0.9h-4.4L16.7,39.8z'%20/%3e%3cpath%20class='st1'%20d='M27.8,25.6l0.9-5.6h-5.3v-3.9c0-1.6,0.6-2.8,3-2.8h2.6V8.2c-1.4-0.2-3-0.4-4.4-0.4c-4.6,0-7.8,2.8-7.8,7.8V20%20h-5v5.6h5v14.1c1.1,0.2,2.2,0.3,3.3,0.3c1.1,0,2.2-0.1,3.3-0.3V25.6H27.8z'/%3e%3c/svg%3e", W0 = "data:image/svg+xml,%3c?xml%20version='1.0'?%3e%3csvg%20fill='%23FFFFFF'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2030%2030'%20width='30px'%20height='30px'%3e%3cpath%20d='M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051%20c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526%20c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769%20c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098%20c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9%20c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594%20c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734%20c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z'/%3e%3c/svg%3e", Y0 = "data:image/svg+xml,%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2048%2048'%20xmlnsXlink='http://www.w3.org/1999/xlink'%3e%3cpath%20fill='%23EA4335'%20d='M24%209.5c3.54%200%206.71%201.22%209.21%203.6l6.85-6.85C35.9%202.38%2030.47%200%2024%200%2014.62%200%206.51%205.38%202.56%2013.22l7.98%206.19C12.43%2013.72%2017.74%209.5%2024%209.5z'%3e%3c/path%3e%3cpath%20fill='%234285F4'%20d='M46.98%2024.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58%202.96-2.26%205.48-4.78%207.18l7.73%206c4.51-4.18%207.09-10.36%207.09-17.65z'%3e%3c/path%3e%3cpath%20fill='%23FBBC05'%20d='M10.53%2028.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92%2016.46%200%2020.12%200%2024c0%203.88.92%207.54%202.56%2010.78l7.97-6.19z'%3e%3c/path%3e%3cpath%20fill='%2334A853'%20d='M24%2048c6.48%200%2011.93-2.13%2015.89-5.81l-7.73-6c-2.15%201.45-4.92%202.3-8.16%202.3-6.26%200-11.57-4.22-13.47-9.91l-7.98%206.19C6.51%2042.62%2014.62%2048%2024%2048z'%3e%3c/path%3e%3cpath%20fill='none'%20d='M0%200h48v48H0z'%3e%3c/path%3e%3c/svg%3e", F0 = "data:image/svg+xml,%3csvg%20width='88'%20height='40'%20viewBox='0%200%2088%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M71.0586%2033.234C65.2757%2033.234%2059.1702%2029.4534%2056.1734%2026.711C52.8957%2023.7104%2043.8921%2013.9438%2043.8523%2013.9002C37.9479%207.31258%2030.009%200%2022.0891%200C12.5503%200%204.23001%206.60657%202.06641%2015.3578C2.23152%2014.7808%205.26436%206.76409%2016.6479%206.76409C22.4308%206.76409%2028.5363%2010.5447%2031.533%2013.2872C34.8107%2016.2877%2043.8143%2026.0543%2043.8542%2026.0979C49.7585%2032.6855%2057.6974%2039.9981%2065.6192%2039.9981C75.1581%2039.9981%2083.4765%2033.3915%2085.642%2024.6404C85.4769%2025.2173%2082.444%2033.234%2071.0605%2033.234H71.0586Z'%20fill='%2329AAE1'/%3e%3cpath%20d='M43.8514%2026.0994C43.8306%2026.0748%2041.238%2023.264%2038.3305%2020.197C36.759%2022.0626%2034.4948%2024.6039%2031.8928%2026.8833C27.0418%2031.1345%2023.8894%2032.0266%2022.0864%2032.0266C15.2844%2032.0266%209.73496%2026.6308%209.73496%2019.9996C9.73496%2013.3684%2015.2768%208.01438%2022.0864%207.97263C22.3331%207.97263%2022.633%207.9973%2022.9936%208.06183C20.9477%207.2761%2018.7746%206.76367%2016.6451%206.76367C5.26542%206.76367%202.23259%2014.7766%202.06557%2015.3574C1.69738%2016.8491%201.5%2018.4016%201.5%2019.9996C1.5%2031.0283%2010.5966%2039.9996%2021.9403%2039.9996C26.6698%2039.9996%2031.9668%2037.576%2037.4214%2032.7933C40.0006%2030.5329%2042.2363%2028.115%2043.916%2026.1716C43.8951%2026.1469%2043.8723%2026.1241%2043.8514%2026.0994Z'%20fill='url(%23paint0_linear_2330_19292)'/%3e%3cpath%20d='M43.8536%2013.9002C43.8745%2013.9248%2046.467%2016.7356%2049.3746%2019.8026C50.946%2017.937%2053.2102%2015.3957%2055.8122%2013.1163C60.6632%208.86506%2063.8156%207.97305%2065.6186%207.97305C72.4207%207.97305%2077.9701%2013.3688%2077.9701%2020C77.9701%2026.5933%2072.4283%2031.9852%2065.6186%2032.027C65.3719%2032.027%2065.072%2032.0023%2064.7114%2031.9377C66.7574%2032.7235%2068.9305%2033.2359%2071.0599%2033.2359C82.4416%2033.2359%2085.4744%2025.223%2085.6414%2024.6422C86.0096%2023.1505%2086.207%2021.598%2086.207%2020C86.207%208.97134%2076.9623%200%2065.6186%200C60.8891%200%2055.7401%202.42361%2050.2837%207.2063C47.7044%209.46669%2045.4687%2011.8846%2043.7891%2013.8281C43.8099%2013.8527%2043.8327%2013.8755%2043.8536%2013.9002Z'%20fill='url(%23paint1_linear_2330_19292)'/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_2330_19292'%20x1='32.7602'%20y1='37.3824'%20x2='4.90291'%20y2='8.53441'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.22'%20stop-color='%23EC1E79'/%3e%3cstop%20offset='0.89'%20stop-color='%23522784'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_2330_19292'%20x1='54.9278'%20y1='2.63428'%20x2='82.7851'%20y2='31.4823'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.21'%20stop-color='%23F05A24'/%3e%3cstop%20offset='0.68'%20stop-color='%23FAAF3B'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", H0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='320'%20height='320'%20viewBox='0%200%20320%20320'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:%2306c755;}.cls-2{fill:%23fff;}%3c/style%3e%3c/defs%3e%3cg%20id='Layer_2'%20data-name='Layer%202'%3e%3cg%20id='LINE_LOGO'%20data-name='LINE%20LOGO'%3e%3crect%20class='cls-1'%20width='320'%20height='320'%20rx='72.14'/%3e%3cpath%20class='cls-2'%20d='M266.66,144.92c0-47.74-47.86-86.58-106.69-86.58S53.28,97.18,53.28,144.92c0,42.8,38,78.65,89.22,85.42,3.48.75,8.21,2.29,9.4,5.26,1.08,2.7.71,6.93.35,9.65,0,0-1.25,7.53-1.52,9.13-.47,2.7-2.15,10.55,9.24,5.76s61.44-36.18,83.82-61.95h0C259.25,181.24,266.66,164,266.66,144.92Z'/%3e%3cpath%20class='cls-1'%20d='M231.16,172.49h-30a2,2,0,0,1-2-2v0h0V123.94h0v0a2,2,0,0,1,2-2h30a2,2,0,0,1,2,2v7.57a2,2,0,0,1-2,2H210.79v7.85h20.37a2,2,0,0,1,2,2V151a2,2,0,0,1-2,2H210.79v7.86h20.37a2,2,0,0,1,2,2v7.56A2,2,0,0,1,231.16,172.49Z'/%3e%3cpath%20class='cls-1'%20d='M120.29,172.49a2,2,0,0,0,2-2v-7.56a2,2,0,0,0-2-2H99.92v-37a2,2,0,0,0-2-2H90.32a2,2,0,0,0-2,2v46.53h0v0a2,2,0,0,0,2,2h30Z'/%3e%3crect%20class='cls-1'%20x='128.73'%20y='121.85'%20width='11.64'%20height='50.64'%20rx='2.04'/%3e%3cpath%20class='cls-1'%20d='M189.84,121.85h-7.56a2,2,0,0,0-2,2v27.66l-21.3-28.77a1.2,1.2,0,0,0-.17-.21v0l-.12-.12,0,0-.11-.09-.06,0-.11-.08-.06,0-.11-.06-.07,0-.11,0-.07,0-.12,0-.08,0-.12,0h-.08l-.11,0h-7.71a2,2,0,0,0-2,2v46.56a2,2,0,0,0,2,2h7.57a2,2,0,0,0,2-2V142.81l21.33,28.8a2,2,0,0,0,.52.52h0l.12.08.06,0,.1.05.1,0,.07,0,.14,0h0a2.42,2.42,0,0,0,.54.07h7.52a2,2,0,0,0,2-2V123.89A2,2,0,0,0,189.84,121.85Z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e", V0 = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20shape-rendering='geometricPrecision'%20text-rendering='geometricPrecision'%20image-rendering='optimizeQuality'%20fill-rule='evenodd'%20clip-rule='evenodd'%20viewBox='0%200%20512%20462.799'%3e%3cpath%20fill='%23fff'%20fill-rule='nonzero'%20d='M403.229%200h78.506L310.219%20196.04%20512%20462.799H354.002L230.261%20301.007%2088.669%20462.799h-78.56l183.455-209.683L0%200h161.999l111.856%20147.88L403.229%200zm-27.556%20415.805h43.505L138.363%2044.527h-46.68l283.99%20371.278z'/%3e%3c/svg%3e", j0 = {
  google: Y0,
  apple: R0,
  facebook: J0,
  twitter: V0,
  internet_identity: F0,
  github: W0,
  line: H0
}, Q0 = h(({ loginProvider: e, login: t }) => {
  const n = z(() => ht.includes(e) ? "social" : "wallet", [e]);
  return /* @__PURE__ */ a(
    k,
    {
      onClick: t,
      icon: /* @__PURE__ */ a("div", { className: "w-6 ml-5 mr-4", children: /* @__PURE__ */ a(
        rn,
        {
          src: j0[e],
          type: "svg",
          alt: `${e} logo`
        }
      ) }),
      children: /* @__PURE__ */ w("div", { className: "inline", children: [
        /* @__PURE__ */ a("p", { className: "hidden lg:inline-flex", children: n === "social" ? "Continue with " : "Connect to " }),
        " ",
        /* @__PURE__ */ a(Ra, { provider: { type: e } })
      ] })
    }
  );
}), Z0 = (e) => {
  const t = Pe();
  return z(() => {
    switch (e) {
      case "unisat":
        return !!t?.hasUnisat;
      case "xverse":
        return !!t?.hasXverse;
      // case 'phantom':
      //   return !!le?.hasPhantom;
      case "okx":
        return !!t?.hasOkx;
      case "wizz":
        return !!t?.hasWizz;
      case "leather":
        return !!t?.hasLeather;
      case "magic-eden":
        return !!t?.hasMagicEden;
      case "oyl":
        return !!t?.hasOyl;
      default:
        return !1;
    }
  }, [t, e]);
}, X0 = h(({ isPending: e, providerType: t, isConnecting: n, connect: r }) => {
  const c = z(() => Gt[t], [t]), i = Z0(t);
  return c ? /* @__PURE__ */ a(
    k,
    {
      onClick: () => r(t),
      icon: /* @__PURE__ */ a("div", { className: _("w-6 ml-5 mr-4", { "opacity-50": !i }), children: /* @__PURE__ */ a(c.Icon, { size: 24 }) }),
      children: e || n ? /* @__PURE__ */ w(Ee, { variant: "shimmer", children: [
        n ? "Signing into " : "Connecting to ",
        c.label
      ] }) : /* @__PURE__ */ w("div", { className: _({ "opacity-50": !i }), children: [
        c.label,
        " ",
        !i && /* @__PURE__ */ a("span", { className: "text-red-500", children: " (not installed)" })
      ] })
    }
  ) : null;
}), U0 = h(() => {
  const { identity: e, connectedBtcAddress: t, clear: n, selectedProvider: r, signInMutation: c, error: i, loading: l } = Ga(), o = Pe();
  return e ? /* @__PURE__ */ w(F, { children: [
    /* @__PURE__ */ a(k, { rightLabel: `${e.getPrincipal().toText().slice(0, 20)}...`, children: "Your principal" }),
    !!t && /* @__PURE__ */ a(k, { rightLabel: `${t.slice(0, 20)}...`, children: "Your pubkey" }),
    /* @__PURE__ */ w(k, { onClick: n, children: [
      "Disconnect ",
      r ?? o.provider
    ] })
  ] }) : /* @__PURE__ */ w(hn, { children: [
    c.error && /* @__PURE__ */ a(
      ce,
      {
        error: `Failed to connect to ${c.variables}. Please check if you have the wallet installed and try again`
      }
    ),
    /* @__PURE__ */ a(ce, { error: i }),
    /* @__PURE__ */ a(F, { children: Pa.map((A, s) => /* @__PURE__ */ a(
      X0,
      {
        isPending: c.isPending && c.variables === A,
        isConnecting: l && (r ?? o.provider ?? c.variables) === A,
        providerType: A,
        connect: c.mutateAsync
      },
      s
    )) })
  ] });
}), q0 = h(({ onClose: e, isLoggingIn: t, loginFactory: n }) => {
  const [r, c] = E(!1), [i, l] = E(), o = z(
    () => r ? ht : ht.slice(0, 5),
    [r]
  );
  return /* @__PURE__ */ w("div", { className: "gap-3 flex flex-col justify-center", children: [
    /* @__PURE__ */ a(
      e2,
      {
        fields: [{ label: "Email", type: "email", name: "email" }],
        values: [i],
        onChange: ([A]) => l(A),
        onCancel: e,
        isLoading: t,
        onConfirm: n({
          type: "email_passwordless",
          email: i ?? ""
        })
      }
    ),
    /* @__PURE__ */ a(F, { children: o.map((A) => /* @__PURE__ */ a(
      Q0,
      {
        loginProvider: A,
        login: n({ type: A })
      },
      A
    )) }),
    !r && /* @__PURE__ */ w(
      gt,
      {
        className: "text-material-main-3 flex flex-row type-button-3 justify-center items-center",
        onClick: () => c(!r),
        children: [
          "Show more",
          /* @__PURE__ */ a(
            rn,
            {
              src: "/icons/chevron-down-white.svg",
              type: "svg",
              className: "w-2 opacity-30 ml-2",
              alt: "Show more"
            }
          )
        ]
      }
    )
  ] });
}), K0 = h(({ onClose: e }) => {
  const { loginFactory: t, error: n, isLoggingIn: r } = W();
  return /* @__PURE__ */ w(bt, { open: !0, onClose: e, children: [
    /* @__PURE__ */ a(t2, { title: "Sign in", text: "Choose a method to sign in" }),
    /* @__PURE__ */ a(Lt, { network: "btc", children: /* @__PURE__ */ a(U0, {}) }),
    /* @__PURE__ */ w(Lt, { network: "ic", children: [
      /* @__PURE__ */ a(
        q0,
        {
          onClose: e,
          isLoggingIn: !!r,
          loginFactory: t
        }
      ),
      /* @__PURE__ */ a(ce, { error: n, className: "mb-4" })
    ] })
  ] });
}), I0 = h(({ children: e }) => {
  const [{ web3AuthProvider: t, internetIdentityProvider: n }, r] = E({}), c = Te(), i = Pe(), [l, o] = E();
  X(() => {
    (async () => {
      const b = {};
      try {
        await ge.init(), b.web3AuthProvider = ge.provider ?? void 0;
      } catch (B) {
        console.error(B);
      }
      try {
        b.internetIdentityProvider = await k2.create({
          idleOptions: { disableIdle: Y, idleTimeout: 864e5 }
        });
      } catch (B) {
        console.error(B);
      }
      r(b);
    })();
  }, []);
  const { data: A = null } = Z({
    queryKey: S.auth.key({
      siwb: c,
      laserEyes: i,
      internetIdentityProvider: n
    }),
    queryFn: async () => {
      if (c.identity && c.identity.getDelegation().delegations.every((y) => y.delegation.expiration > cn(/* @__PURE__ */ new Date()))) {
        const y = he.createSync({ identity: c.identity, host: je });
        return Y && await y.fetchRootKey(), {
          type: "siwb",
          provider: { type: "siwb", provider: i.provider },
          agent: y,
          identity: c.identity,
          principal: c.identity.getPrincipal(),
          accountIdentifier: re.fromPrincipal({
            principal: c.identity.getPrincipal()
          })
        };
      }
      try {
        if (!n)
          throw new Error("Internet Identity provider not initialized");
        if (!await n.isAuthenticated())
          throw new Error("Not authenticated");
        const y = await n.getIdentity(), b = he.createSync({ identity: y, host: je });
        Y && await b.fetchRootKey();
        const B = y.getPrincipal(), O = re.fromPrincipal({
          principal: B
        });
        return {
          type: "internet_identity",
          provider: { type: "internet_identity" },
          principal: B,
          identity: y,
          accountIdentifier: O,
          agent: b
        };
      } catch (y) {
        console.error(y);
      }
      if (!t) return null;
      try {
        const y = await ge.getUserInfo(), b = await t.request({ method: "private_key" }), B = z2.from(b, "hex"), O = B.buffer.slice(
          B.byteOffset,
          B.byteOffset + B.byteLength
        ), P = O2.fromSecretKey(O), H = he.createSync({ identity: P, host: je });
        Y && await H.fetchRootKey();
        const N = await H.getPrincipal(), te = re.fromPrincipal({
          principal: N
        });
        return {
          type: "web3auth",
          provider: y,
          userInfo: y,
          accountIdentifier: te,
          principal: N,
          agent: H,
          identity: P
        };
      } catch (y) {
        console.error(y);
      }
      return null;
    },
    select: (y) => y || null,
    retry: !1
    // enabled: !!web3AuthProvider || !!internetIdentityProvider || !!siwb.identity,
  }), {
    mutateAsync: s,
    isPending: d,
    error: f
  } = Q({
    mutationFn: async (y) => {
      switch (y.type) {
        case "internet_identity":
          if (!n)
            throw new Error("Internet Identity provider not initialized");
          await new Promise((b, B) => {
            n.login({
              identityProvider: R2,
              windowOpenerFeatures: "toolbar=0,location=0,menubar=0,width=500,height=500,left=100,top=100",
              onSuccess: () => {
                b(null);
              },
              onError: (O) => {
                B(O);
              }
            });
          });
          break;
        case "email_passwordless":
          await ge.connectTo(Jt.AUTH, {
            loginProvider: y.type,
            options: {
              login_hint: y.email
            }
          });
          break;
        default:
          await ge.connectTo(Jt.AUTH, {
            loginProvider: y.type
          });
          break;
      }
      S.auth.invalidate({
        siwb: c,
        laserEyes: i,
        internetIdentityProvider: n
      });
    }
  }), {
    mutateAsync: g,
    error: u
  } = Q({
    mutationFn: async () => {
      try {
        switch (A?.type) {
          case "internet_identity":
            if (!n) return;
            await n.logout();
            break;
          case "web3auth":
            await ge.logout();
            break;
          case "siwb":
            c.clear(), i.disconnect();
            break;
        }
      } catch (y) {
        console.error(y);
      }
      S.auth.invalidate({
        siwb: c,
        laserEyes: i,
        internetIdentityProvider: n
      });
    }
  }), p = (y) => () => s(y), m = async () => A || new Promise((y, b) => {
    o({
      onSuccess: (B) => {
        o(void 0), y(B);
      },
      onError: (B) => {
        o(void 0), b(B);
      }
    });
  }), C = z(
    () => ({
      authData: A || void 0,
      error: f || u || void 0,
      isLoggingIn: d,
      login: s,
      loginFactory: p,
      logout: g,
      requireLogin: m
    }),
    [A, s, g, f, u, d]
  );
  return /* @__PURE__ */ w(vn.Provider, { value: C, children: [
    l && /* @__PURE__ */ a(K0, { onClose: () => l.onError(new Error("User cancelled")) }),
    e
  ] });
}), L0 = M.fromText(
  Y ? "be2us-64aaa-aaaaa-qaabq-cai" : "j2let-saaaa-aaaam-qds2q-cai"
), Mt = async (e, t) => {
  if ("Fake" in e) return 0n;
  if ("ICP" in e.Real)
    return zt.create({
      agent: t.agent,
      canisterId: $(e.Real)
    }).accountBalance({
      accountIdentifier: re.fromPrincipal({
        principal: t.principal
      })
    });
  const n = $(e.Real);
  return ie.create({
    agent: t.agent,
    canisterId: n
  }).balance({
    owner: t.principal
  });
}, fe = (e) => {
  const { authData: t } = W(), { data: n = 0n } = Z({
    queryKey: S.walletBalance.key(e, t),
    queryFn: async () => t ? Mt(e, t) : 0n,
    refetchInterval: 5e3
  });
  return z(() => n, [n]);
}, D0 = (e) => {
  const { authData: t } = W(), n = fe(e);
  return le(
    async (r, c) => {
      if (!t) throw new Error("Auth data not found");
      const i = await Mt(e, t);
      if (!(r <= 0))
        return new Promise((l, o) => {
          if (i >= r) return l();
          alert("Insufficient balance");
        });
    },
    [n]
  );
}, Cr = (e, t) => {
  const { authData: n } = W(), r = D0({ Real: e });
  return Q({
    mutationFn: async (c) => {
      if (!t) throw new v("Recipient not found");
      if (!n) throw new v("Auth data not found");
      const { meta: i } = await Xe(n.agent, e);
      await r(c + i.transactionFee);
      try {
        return await Nn(
          { Real: e },
          t,
          c + i.transactionFee,
          n
        );
      } catch (l) {
        throw console.error(l), new v(
          `Transfer failed. Please check your balance and try again. (Transaction fee is ${Ae(
            i.transactionFee,
            i
          )} ${ve(e)})`
        );
      }
    },
    onSuccess: () => {
      S.walletBalance.invalidate({ Real: e }, n), S._balanceModalBalance.invalidate({ Real: e });
    }
  });
}, Hn = (e) => {
  const { authData: t } = W(), { data: n } = Z({
    queryKey: S.allowance.key(
      e?.currencyType ?? { Fake: null },
      e?.receiver,
      t?.principal
    ),
    queryFn: async () => t && e ? bn(e.currencyType, e.receiver, t) : 0n,
    initialData: 0n,
    refetchInterval: 1e4
  });
  return z(() => n, [n]);
}, Vn = (e) => {
  const { authData: t } = W(), n = ee(Mn), r = fe(e?.currencyType ?? { Real: { ICP: null } }), c = Hn(e), i = Le(
    e?.currencyType ?? { Real: { ICP: null } }
  );
  return z(
    () => ({
      allowance: c,
      require: async (l, o) => {
        if (!e) throw new v("Address not provided");
        if (!t) throw new v("Auth data not provided");
        const A = l.amount + i, s = await bn(
          e.currencyType,
          e.receiver,
          t
        );
        if (s >= A) return;
        if (A - s > r)
          throw new v("Insufficient balance including fee");
        await $2(
          e.currencyType,
          e.receiver,
          A,
          t,
          o
        ), await S.allowance.invalidate(
          e?.currencyType ?? "ICP",
          e?.receiver,
          t?.principal
        );
      },
      update: async (l, o) => {
        if (!e) throw new v("Address not provided");
        await n.setAllowance(e, l, o), await S.allowance.invalidate(
          e?.currencyType ?? "ICP",
          e?.receiver,
          t?.principal
        );
      }
    }),
    [c, n, e]
  );
}, Tr = h(({ currencyType: e, receiver: t, name: n }) => {
  const r = Vn({ currencyType: e, receiver: t, name: n });
  return n2() ? /* @__PURE__ */ w(
    k,
    {
      rightLabel: /* @__PURE__ */ a(J, { currencyValue: r.allowance, currencyType: e }),
      onClick: () => r.update({ amount: 0n, reason: "Revoke" }, yt(/* @__PURE__ */ new Date(), 2)),
      children: [
        "Allowance of ",
        n
      ]
    }
  ) : /* @__PURE__ */ w(F, { label: /* @__PURE__ */ w(x, { children: [
    "Allownce for ",
    n
  ] }), children: [
    /* @__PURE__ */ a(
      k,
      {
        rightLabel: /* @__PURE__ */ a(J, { currencyValue: r.allowance, currencyType: e }),
        onClick: () => r.update({ amount: 0n, reason: "Revoke" }, yt(/* @__PURE__ */ new Date(), 2)),
        children: "Amount"
      }
    ),
    /* @__PURE__ */ a(k, { children: "Principal" })
  ] });
}), Dt = h(
  ({
    currencyType: e,
    onChange: t,
    value: n,
    defaultValue: r,
    min: c,
    hideMinQuickAction: i,
    hideMaxQuickAction: l,
    max: o,
    ...A
  }) => {
    const s = ue(e), d = z(() => "alternatives" in s && s.alternatives && Object.values(s.alternatives).length > 0 ? Object.values(s.alternatives)[0] ?? s : s, [s]), f = z(() => d.decimals === 0 ? ye(1) : "Real" in e && "BTC" in e.Real ? ye(1e-8) : d.renderedDecimalPlaces !== void 0 ? ye(1 / Math.pow(10, d.renderedDecimalPlaces)) : ye(1e-4), [d.renderedDecimalPlaces, K.serialize(e)]), g = le((p) => p === void 0 ? void 0 : an(p, d.decimals), [d.decimals]), u = le((p) => p === void 0 ? void 0 : nn(p, d.decimals), [d.decimals]);
    return /* @__PURE__ */ a(
      on,
      {
        ...A,
        step: f,
        maxDecimals: d.decimals,
        min: u(c),
        max: u(o),
        symbol: /* @__PURE__ */ a("div", { className: "flex justify-center items-center -mt-0.5", children: /* @__PURE__ */ a(Nt, { meta: d, className: "size-4 flex" }) }),
        value: u(n),
        defaultValue: u(r),
        hideClear: !0,
        onChangeBigFloat: t && ((p) => t(g(p) ?? 0n)),
        minQuickAction: !i,
        maxQuickAction: !l
      }
    );
  }
), jn = L({
  enabledNetworks: [],
  selectedCurrency: { ICP: null },
  setSelectedCurrency: () => {
  },
  isBTC: !1
}), _0 = h(
  ({ children: e, enabledNetworks: t, disabledNetworks: n }) => {
    const r = z(() => {
      let s = [...t || [...d0]];
      return n ? s.filter((d) => n.findIndex((f) => f === d) === -1) : s;
    }, [t, n]), c = z(() => ea(r), [r]), [i, l] = de(
      "selectedCurrency",
      T.serialize(c ? { BTC: null } : { ICP: null })
    ), o = z(() => c ? { BTC: null } : T.deserialize(i), [i, c]), A = le((s) => {
      c || l(T.serialize(s));
    }, [l, c]);
    return /* @__PURE__ */ a(jn.Provider, { value: { isBTC: c, enabledNetworks: r, selectedCurrency: o, setSelectedCurrency: A }, children: e });
  }
), De = () => ee(jn), $0 = () => {
  const e = De();
  return z(() => e.enabledNetworks, [e.enabledNetworks]);
}, ea = (e) => e.length === 1 && e.includes("btc"), D = () => {
  const e = De().isBTC;
  return z(() => e, [e]);
}, Br = () => {
  const { selectedCurrency: e } = De();
  return z(() => e, [T.serialize(e)]);
}, br = () => {
  const { setSelectedCurrency: e } = De();
  return le((t) => e(t), [e]);
}, _t = "https://icrc-api.internetcomputer.org/api/v2/ledgers?limit=100", ta = [
  "ICP",
  "ETH",
  "USDC",
  "USDT",
  "BTC",
  "---",
  "ckUSDC",
  "ckUSDT",
  "ckETH",
  "ckBTC"
], Qn = L({
  highlightedCurrencies: [],
  allCurrencies: [],
  addCurrency: () => {
  },
  removeCurrency: () => {
  }
}), na = () => {
  const e = localStorage.getItem("highlightedCurrency");
  return e ? JSON.parse(e).map(T.deserialize) : [];
}, aa = (e) => {
  localStorage.setItem("highlightedCurrency", JSON.stringify(e.map(T.serialize)));
}, Zn = (e) => Z({
  queryKey: ["token-registry", "icrc", e ?? "none"],
  queryFn: async () => {
    try {
      const r = M.fromText(e ?? ""), i = await ie.create({ canisterId: r }).metadata({}), l = kt(i);
      if (!l?.symbol) throw new Error(`Metadata not found for ${e}`);
      return [
        {
          GenericICRC1: {
            ledger_id: r,
            symbol: Ft(l.symbol),
            decimals: l.decimals
          }
        }
      ];
    } catch {
    }
    const {
      data: { data: t }
    } = await P2.get(e ? `${_t}&query=${encodeURIComponent(e)}` : _t), n = [];
    for (const r of t)
      !r.icrc1_metadata || !r.icrc1_metadata.icrc1_logo || ta.includes(r.icrc1_metadata.icrc1_symbol) || n.push({
        GenericICRC1: {
          ledger_id: M.fromText(r.ledger_canister_id),
          symbol: Ft(r.icrc1_metadata.icrc1_symbol),
          decimals: parseInt(r.icrc1_metadata.icrc1_decimals)
        }
      });
    return n;
  },
  initialData: []
}), ra = h(({ children: e }) => {
  const [t, n] = E(na()), r = D(), c = (s) => {
    n((d) => [...d, s].filter((f, g, u) => u.findIndex((p) => T.serialize(p) === T.serialize(f)) === g));
  }, i = (s) => {
    n((d) => d.filter((f) => T.serialize(f) !== T.serialize(s)));
  };
  X(() => aa(t), [t]);
  const l = Zn(), o = z(
    () => r ? [{ BTC: null }] : [
      { CKETHToken: { ETH: null } },
      { CKETHToken: { USDC: null } },
      { CKETHToken: { USDT: null } },
      { ICP: null },
      ...l.data
    ],
    [l.data, r]
  ), A = z(
    () => r ? [{ BTC: null }] : [
      { CKETHToken: { ETH: null } },
      { CKETHToken: { USDC: null } },
      { CKETHToken: { USDT: null } },
      { ICP: null },
      ...t
    ],
    [t.map(T.serialize), r]
  );
  return /* @__PURE__ */ a(
    Qn.Provider,
    {
      value: {
        highlightedCurrencies: A,
        allCurrencies: o,
        addCurrency: c,
        removeCurrency: i
      },
      children: e
    }
  );
}), _e = () => ee(Qn), St = h(({ onClose: e, isOpen: t, onSelect: n }) => {
  const r = _e(), { addCurrency: c, removeCurrency: i } = r, [l, o] = E(), A = D(), { data: s, isPending: d, isFetching: f, ...g } = Zn(l), u = z(() => {
    let p = l ? s : [
      ...r.allCurrencies,
      ...s
    ].filter(
      (m, C, y) => y.findIndex((b) => T.serialize(b) === T.serialize(m)) === C
    );
    return n && !l && (p = p.filter((m) => !r.highlightedCurrencies.some((C) => T.serialize(C) === T.serialize(m)))), p.sort((m, C) => {
      const y = r.highlightedCurrencies.some((B) => T.serialize(B) === T.serialize(m)), b = r.highlightedCurrencies.some((B) => T.serialize(B) === T.serialize(C));
      return y !== b ? Number(b) - Number(y) : T.serialize(m).localeCompare(T.serialize(C));
    });
  }, [r.allCurrencies, s, l, r.highlightedCurrencies, n]);
  return A ? null : /* @__PURE__ */ w(
    bt,
    {
      title: "Add a token",
      onClose: e,
      open: t,
      children: [
        /* @__PURE__ */ a(He, { children: "Add a token" }),
        /* @__PURE__ */ a(
          xt,
          {
            label: "Search",
            placeholder: "Search or paste a ledger address",
            onChange: o,
            value: l
          }
        ),
        f && u.length === 0 && /* @__PURE__ */ a(Ee, { variant: "shimmer", children: "Fetching ledgers" }),
        u.length === 0 && !f && /* @__PURE__ */ a("p", { className: "text-center text-gray-500", children: "No tokens found" }),
        u.length > 0 && /* @__PURE__ */ a(x, { children: n ? /* @__PURE__ */ a(F, { label: "Tokens", children: u.map((p) => /* @__PURE__ */ a(
          k,
          {
            onClick: () => n(p),
            children: /* @__PURE__ */ a(Ce, { currencyType: { Real: p } })
          },
          T.serialize(p)
        )) }) : /* @__PURE__ */ a(F, { label: "Tokens", children: u.map((p) => /* @__PURE__ */ a(
          sn,
          {
            label: /* @__PURE__ */ a(Ce, { currencyType: { Real: p } }),
            checked: r.highlightedCurrencies.some((m) => T.serialize(m) === T.serialize(p)),
            onChange: (m) => (m ? c : i)(p)
          },
          T.serialize(p)
        )) }) })
      ]
    },
    "add-token-modal"
  );
}), xr = h(({ label: e, value: t, onChange: n }) => {
  const r = z(() => t && K.serialize(t), [t]), c = (d) => n(d ? K.deserialize(d) : void 0), { highlightedCurrencies: i, addCurrency: l } = _e(), [o, A] = E(!1), s = D();
  return X(() => {
    s && n({ Real: { BTC: null } });
  }, [s]), s ? null : /* @__PURE__ */ w(x, { children: [
    /* @__PURE__ */ a(
      St,
      {
        isOpen: o,
        onClose: () => A(!1),
        onSelect: (d) => {
          n({ Real: d }), l(d), A(!1);
        }
      }
    ),
    /* @__PURE__ */ a(
      Oe,
      {
        options: [
          { value: void 0, label: "Select a token" },
          { value: K.serialize({ Fake: null }), label: /* @__PURE__ */ a(Ce, { currencyType: { Fake: null } }) },
          ...i.map((d) => ({
            value: K.serialize({ Real: d }),
            label: /* @__PURE__ */ a(Ce, { currencyType: { Real: d } })
          })),
          {
            value: "other",
            label: "Other"
          }
        ],
        label: e,
        value: r,
        onChange: (d) => {
          d === "other" ? A(!0) : c(d);
        }
      }
    )
  ] });
}), zr = h(({ value: e, onChange: t, label: n }) => {
  const r = z(() => e && K.serialize({ Real: e }), [e]), c = (d) => {
    if (console.log({ value: d }), d) {
      const f = K.deserialize(d);
      if ("Fake" in f)
        throw new Error("Fake currency not allowed");
      t(f.Real);
    } else
      t(void 0);
  }, [i, l] = E(!1), { highlightedCurrencies: o, addCurrency: A } = _e(), s = D();
  return X(() => {
    s && t({ BTC: null });
  }, [s]), s ? null : /* @__PURE__ */ w(x, { children: [
    /* @__PURE__ */ a(
      St,
      {
        isOpen: i,
        onClose: () => l(!1),
        onSelect: (d) => {
          t(d), A(d), l(!1);
        }
      }
    ),
    /* @__PURE__ */ a(
      Oe,
      {
        options: [
          { value: void 0, label: "Select a token" },
          ...o.map((d) => ({
            value: K.serialize({ Real: d }),
            label: /* @__PURE__ */ a(Ce, { currencyType: { Real: d } })
          })),
          {
            value: "other",
            label: "Other"
          }
        ],
        label: n,
        value: r,
        onChange: (d) => {
          d === "other" ? l(!0) : c(d);
        }
      }
    )
  ] });
}), ca = "data:image/svg+xml,%3csvg%20width='2701'%20height='3925'%20viewBox='0%200%202701%203925'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0%201123.78C0%201036.64%2070.642%20966%20157.783%20966H2542.28C2629.43%20966%202700.07%201036.64%202700.07%201123.78V1909.74C2700.07%202655.34%202095.64%203259.78%201350.03%203259.78C604.431%203259.78%200%202655.34%200%201909.74V1123.78Z'%20fill='url(%23paint0_linear)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2593.17%202437.3C2387.77%202920.83%201908.5%203259.94%201350.03%203259.94C604.431%203259.94%200%202655.51%200%201909.9V1342.16C256.416%201200.58%20551.223%201120%20864.85%201120C1690.17%201120%202385.17%201677.99%202593.17%202437.3Z'%20fill='url(%23paint1_linear)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2270.38%202898.52C2029.24%203123.3%201705.7%203260.84%201350.03%203260.84C604.431%203260.84%200%202656.41%200%201910.8V1766.48C228.495%201623.59%20498.568%201541%20787.931%201541C1565.79%201541%202204.25%202137.82%202270.38%202898.52Z'%20fill='url(%23paint2_linear)'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1804.3%203188.71C1776.22%202565.56%201264%202069%20636.222%202069C418.032%202069%20213.799%202128.98%2039%202233.42C147.688%202678.73%20475.344%203037.76%20900.894%203188.98V3264.44C900.894%203373.69%20959.59%203469.18%201047.06%203520.88V3726.37C1047.06%203835.86%201135.49%203924.61%201244.57%203924.61H1459.86C1568.95%203924.61%201657.38%203835.86%201657.38%203726.37V3520.88C1744.85%203469.18%201803.54%203373.69%201803.54%203264.44V3188.98C1803.8%203188.89%201804.05%203188.8%201804.3%203188.71Z'%20fill='url(%23paint3_linear)'/%3e%3cpath%20d='M504%2060C504%2026.8629%20530.863%200%20564%200H838C871.137%200%20898%2026.8629%20898%2060V966H504V60Z'%20fill='%23031514'/%3e%3cpath%20d='M1792%2060C1792%2026.8629%201818.86%200%201852%200H2126C2159.14%200%202186%2026.8629%202186%2060V966H1792V60Z'%20fill='%23031514'/%3e%3cg%20filter='url(%23filter0_i)'%3e%3cpath%20d='M672.133%202339.6C665.796%202338.36%20659.96%202343.39%20660.365%202349.84C680.428%202669.31%20981.987%202922.93%201351.05%202922.93C1719.27%202922.93%202020.29%202670.48%202041.6%202352.05C2042.03%202345.6%202036.21%202340.54%202029.87%202341.76C1815.09%202383.12%201584%202423.42%201351.05%202423.42C1114.02%202423.42%20889.87%202382.34%20672.133%202339.6Z'%20fill='url(%23paint4_linear)'/%3e%3c/g%3e%3cpath%20d='M703.109%202390.42C714.991%202490.79%201007.42%202613.29%201355.49%202613.29C1702.77%202613.29%201989.78%202490.48%202002.85%202390.42C1799.68%202403.43%201782.94%202468.14%201355.49%202468.14C906.255%202468.14%20909.406%202403.86%20703.109%202390.42Z'%20fill='url(%23paint5_linear)'/%3e%3cpath%20d='M1299%201734.95C1197.43%201921.41%201038.66%202109.84%20855.234%202104.91C667.88%202104.91%20516%201939.27%20516%201734.95C516%201530.63%20667.88%201365%20855.234%201365C1042.59%201365%201180.66%201528.77%201299%201734.95Z'%20fill='url(%23paint6_linear)'/%3e%3cpath%20d='M1399%201735.49C1500.57%201918.24%201659.34%202109.75%201842.77%202104.91C2030.12%202104.91%202182%201935.75%202182%201735.49C2182%201535.23%202031.11%201365%201843.75%201365C1656.4%201365%201517.34%201533.4%201399%201735.49Z'%20fill='url(%23paint7_linear)'/%3e%3ccircle%20cx='987.542'%20cy='1797.18'%20r='89.1743'%20fill='%23031514'/%3e%3ccircle%20cx='1018.7'%20cy='1836.94'%20r='30.0829'%20fill='white'/%3e%3ccircle%20cx='1711.37'%20cy='1797.18'%20r='89.1743'%20fill='%23031514'/%3e%3ccircle%20cx='1742.53'%20cy='1836.94'%20r='30.0829'%20fill='white'/%3e%3cpath%20d='M1300.87%201738.58L517.972%201779C516.283%201764.21%20515.021%201757.31%20515.019%201746.47C513.047%201528.61%20665.883%201363%20858.155%201363C1050.43%201363%201200.29%201553.26%201298.9%201733.65C1298.07%201735.17%201301.71%201737.06%201300.87%201738.58Z'%20fill='%23031514'/%3e%3cpath%20d='M1397.13%201738.58L2180.83%201779C2182.52%201764.21%202182.78%201757.31%202182.78%201746.47C2189.71%201532.55%202031.95%201363%201839.73%201363C1647.51%201363%201497.68%201553.26%201399.1%201733.65C1399.93%201735.17%201396.29%201737.06%201397.13%201738.58Z'%20fill='%23031514'/%3e%3cg%20filter='url(%23filter1_i)'%3e%3cpath%20d='M1838.17%201272C1599.49%201272%201425.76%201510.33%201350%201637.52C1274.24%201510.33%201100.51%201272%20861.831%201272C620.927%201272%20425%201479.49%20425%201734.5C425%201989.51%20620.927%202197%20861.831%202197C1100.48%202197%201274.24%201958.67%201350%201831.45C1425.76%201958.67%201599.49%202197%201838.17%202197C2079.07%202197%202275%201989.51%202275%201734.5C2275%201479.49%202079.07%201272%201838.17%201272ZM861.831%202104.5C671.975%202104.5%20517.5%201938.52%20517.5%201734.5C517.5%201530.48%20671.975%201364.5%20861.831%201364.5C1087.39%201364.5%201256.31%201655.33%201298.14%201734.5C1256.31%201813.67%201087.42%202104.5%20861.831%202104.5ZM1838.17%202104.5C1612.61%202104.5%201443.69%201813.67%201401.86%201734.5C1443.69%201655.33%201612.61%201364.5%201838.17%201364.5C2028.03%201364.5%202182.5%201530.48%202182.5%201734.5C2182.5%201938.52%202028.03%202104.5%201838.17%202104.5Z'%20fill='url(%23paint8_linear)'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_i'%20x='660.345'%20y='2339.41'%20width='1381.27'%20height='583.521'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='17.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.64%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow'/%3e%3c/filter%3e%3cfilter%20id='filter1_i'%20x='425'%20y='1272'%20width='1850'%20height='925'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset/%3e%3cfeGaussianBlur%20stdDeviation='17.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='arithmetic'%20k2='-1'%20k3='1'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.64%200'/%3e%3cfeBlend%20mode='normal'%20in2='shape'%20result='effect1_innerShadow'/%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear'%20x1='1801.69'%20y1='1816.06'%20x2='2773.04'%20y2='843.718'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2346FF47'/%3e%3cstop%20offset='1'%20stop-color='%239CFF9D'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear'%20x1='1566.99'%20y1='1795.81'%20x2='1896.78'%20y2='1223.9'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%2310D9ED'/%3e%3cstop%20offset='1'%20stop-color='%2310D9ED'%20stop-opacity='0.3'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear'%20x1='1460.48'%20y1='2039.52'%20x2='1649.76'%20y2='1535.91'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FA51D3'/%3e%3cstop%20offset='0.958774'%20stop-color='%23FA51D3'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint3_linear'%20x1='1002.5'%20y1='2823'%20x2='1306.54'%20y2='2013.26'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23FFE700'/%3e%3cstop%20offset='1'%20stop-color='%23FFE700'%20stop-opacity='0'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint4_linear'%20x1='1351.01'%20y1='2337.16'%20x2='1351.01'%20y2='2922.93'%20gradientUnits='userSpaceOnUse'%3e%3cstop/%3e%3cstop%20offset='1'%20stop-opacity='0.65'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint5_linear'%20x1='1540.35'%20y1='2421.97'%20x2='1540.35'%20y2='2579.76'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.75'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23DEDEDF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint6_linear'%20x1='1020.38'%20y1='1469.78'%20x2='1020.37'%20y2='1993.67'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.75'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23DEDEDF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint7_linear'%20x1='1677.62'%20y1='1469.78'%20x2='1677.63'%20y2='1993.67'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20offset='0.75'%20stop-color='white'/%3e%3cstop%20offset='1'%20stop-color='%23DEDEDF'/%3e%3c/linearGradient%3e%3clinearGradient%20id='paint8_linear'%20x1='1350'%20y1='1272'%20x2='1350'%20y2='2197'%20gradientUnits='userSpaceOnUse'%3e%3cstop/%3e%3cstop%20offset='1'%20stop-opacity='0.65'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e", ia = "data:image/svg+xml,%3csvg%20width='42'%20height='42'%20viewBox='0%200%201080%201080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M1080%20540C1080%20838.234%20838.234%201080%20540%201080C241.766%201080%200%20838.234%200%20540C0%20241.766%20241.766%200%20540%200C838.234%200%201080%20241.766%201080%20540ZM540%201050.41C821.892%201050.41%201050.41%20821.892%201050.41%20540C1050.41%20258.108%20821.892%2029.589%20540%2029.589C258.108%2029.589%2029.589%20258.108%2029.589%20540C29.589%20821.892%20258.108%201050.41%20540%201050.41Z'%20fill='url(%23paint0_linear_28_125)'%3e%3c/path%3e%3cmask%20id='mask0_28_125'%20maskUnits='userSpaceOnUse'%20x='31'%20y='29'%20width='1020'%20height='1020'%20style='mask-type:%20alpha;'%3e%3ccircle%20cx='541'%20cy='539'%20r='510'%20fill='%23D9D9D9'%3e%3c/circle%3e%3c/mask%3e%3cg%20mask='url(%23mask0_28_125)'%3e%3ccircle%20cx='541'%20cy='539'%20r='540.824'%20fill='%2300013A'%20stroke='url(%23paint1_linear_28_125)'%20stroke-width='61.6484'%3e%3c/circle%3e%3cg%20filter='url(%23filter0_f_28_125)'%3e%3cg%20filter='url(%23filter1_f_28_125)'%3e%3cellipse%20cx='733.018'%20cy='1358.61'%20rx='993.649'%20ry='507.501'%20transform='rotate(-6.48121%20733.018%201358.61)'%20fill='%23783DFF'%3e%3c/ellipse%3e%3c/g%3e%3cg%20filter='url(%23filter2_f_28_125)'%3e%3cpath%20d='M1427.81%20936.232C1561.01%20848.432%201599.76%20758.379%201695.91%20633.491C1881.52%20392.416%201883.85%20190.314%202083.77%20-39.7105C2491.68%20-509.061%202222.72%201340.08%201595.83%201466.54C1201.75%201546.04%20242.744%201248.51%20616.218%201107.81C765.371%201051.62%20870.102%201101.67%201027.26%201069.04C1189.46%201035.35%201291.89%201025.83%201427.81%20936.232Z'%20fill='url(%23paint2_linear_28_125)'%3e%3c/path%3e%3c/g%3e%3cg%20filter='url(%23filter3_f_28_125)'%3e%3cpath%20d='M-603.529%201076.3C-910.327%201087.12%20-1109.62%201162.19%20-1302.02%201339.39C-1691.78%201698.39%20616.474%201835.36%20289.7%201433.85C83.6632%201180.69%20-211.651%201062.48%20-603.529%201076.3Z'%20fill='%23006FFF'%3e%3c/path%3e%3c/g%3e%3cg%20filter='url(%23filter4_f_28_125)'%3e%3cpath%20d='M-379.764%201113.3C-577.502%201126.31%20-706.559%201199.3%20-832.089%201369.12C-1086.39%201713.15%20399.383%201822.43%20192.464%201444.48C61.9973%201206.17%20-127.189%201096.68%20-379.764%201113.3Z'%20fill='%2300FFFF'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cg%20filter='url(%23filter5_f_28_125)'%3e%3cg%20filter='url(%23filter6_f_28_125)'%3e%3cpath%20d='M-599.617%201501.42C-301.428%201574.39%20-121.561%201688.41%2030.7895%201901.03C339.423%202331.77%20-1948.47%201996.57%20-1546.89%201669.89C-1293.68%201463.91%20-980.5%201408.21%20-599.617%201501.42Z'%20fill='%23006FFF'%3e%3c/path%3e%3c/g%3e%3cpath%20d='M-826.233%201492.15C-635.27%201545.09%20-523.749%201642.79%20-435.369%201834.59C-256.328%202223.14%20-1733.28%202028.06%20-1453.84%201700.07C-1277.65%201493.27%20-1070.15%201424.52%20-826.233%201492.15Z'%20fill='%2300FFFF'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3cg%20clip-path='url(%23clip0_28_125)'%3e%3cpath%20d='M120.569%20540.415C120.566%20579.092%20132.033%20616.9%20153.519%20649.059C175.005%20681.219%20205.545%20706.284%20241.277%20721.085C277.01%20735.886%20316.328%20739.758%20354.262%20732.212C392.195%20724.666%20427.038%20706.04%20454.385%20678.691L455.432%20677.294L664.941%20441.248C677.81%20428.351%20693.106%20418.131%20709.948%20411.178C726.789%20404.226%20744.841%20400.679%20763.06%20400.743C800.103%20400.743%20835.63%20415.459%20861.823%20441.652C888.017%20467.846%20902.732%20503.372%20902.732%20540.415C902.732%20577.459%20888.017%20612.985%20861.823%20639.178C835.63%20665.372%20800.103%20680.087%20763.06%20680.087C744.841%20680.151%20726.789%20676.605%20709.948%20669.652C693.106%20662.7%20677.81%20652.48%20664.941%20639.582L635.26%20606.061C630.352%20600.505%20623.437%20597.126%20616.038%20596.667C608.638%20596.209%20601.359%20598.709%20595.803%20603.617C590.246%20608.525%20586.867%20615.44%20586.409%20622.839C585.95%20630.239%20588.45%20637.518%20593.359%20643.074L623.737%20677.294L624.785%20678.691C642.943%20696.85%20664.5%20711.256%20688.225%20721.084C711.951%20730.912%20737.38%20735.97%20763.06%20735.97C788.741%20735.97%20814.17%20730.912%20837.895%20721.084C861.62%20711.256%20883.178%20696.85%20901.335%20678.691C928.685%20651.344%20947.311%20616.5%20954.857%20578.567C962.403%20540.634%20958.531%20501.315%20943.73%20465.583C928.929%20429.851%20903.863%20399.311%20871.704%20377.825C839.545%20356.338%20801.737%20344.872%20763.06%20344.874C737.367%20344.777%20711.91%20349.789%20688.171%20359.62C664.433%20369.451%20642.886%20383.905%20624.785%20402.14L623.737%20403.537L414.229%20639.582C401.36%20652.48%20386.063%20662.7%20369.222%20669.652C352.381%20676.605%20334.329%20680.151%20316.11%20680.087C279.066%20680.087%20243.54%20665.372%20217.346%20639.178C191.153%20612.985%20176.438%20577.459%20176.438%20540.415C176.438%20503.372%20191.153%20467.846%20217.346%20441.652C243.54%20415.459%20279.066%20400.743%20316.11%20400.743C334.329%20400.679%20352.381%20404.226%20369.222%20411.178C386.063%20418.131%20401.36%20428.351%20414.229%20441.248L443.91%20474.769C448.818%20480.326%20455.732%20483.705%20463.132%20484.163C470.532%20484.622%20477.81%20482.122%20483.367%20477.214C488.923%20472.305%20492.302%20465.391%20492.761%20457.991C493.219%20450.592%20490.719%20443.313%20485.811%20437.756L455.432%20403.537L454.385%20402.14C427.038%20374.79%20392.195%20356.165%20354.262%20348.618C316.328%20341.072%20277.01%20344.945%20241.277%20359.746C205.545%20374.547%20175.005%20399.612%20153.519%20431.771C132.033%20463.93%20120.566%20501.739%20120.569%20540.415Z'%20fill='url(%23paint3_angular_28_125)'%3e%3c/path%3e%3cpath%20d='M296.121%20590.221V579.148H279.511V568.075H290.584V512.71H279.511V501.637H296.121V490.564H307.194V501.637H318.267V490.564H329.34V502.329C334.139%20503.621%20338.106%20506.226%20341.244%20510.146C344.381%20514.07%20345.95%20518.615%20345.95%20523.783C345.95%20526.459%20345.488%20529.019%20344.566%20531.462C343.643%20533.909%20342.351%20536.102%20340.69%20538.04C343.92%20539.977%20346.526%20542.607%20348.508%20545.929C350.493%20549.251%20351.486%20552.942%20351.486%20557.002C351.486%20563.092%20349.318%20568.306%20344.981%20572.643C340.644%20576.98%20335.43%20579.148%20329.34%20579.148V590.221H318.267V579.148H307.194V590.221H296.121ZM301.657%20534.856H323.804C326.849%20534.856%20329.456%20533.771%20331.627%20531.601C333.793%20529.434%20334.877%20526.828%20334.877%20523.783C334.877%20520.738%20333.793%20518.13%20331.627%20515.96C329.456%20513.793%20326.849%20512.71%20323.804%20512.71H301.657V534.856ZM301.657%20568.075H329.34C332.385%20568.075%20334.993%20566.992%20337.163%20564.825C339.33%20562.655%20340.413%20560.047%20340.413%20557.002C340.413%20553.957%20339.33%20551.349%20337.163%20549.179C334.993%20547.012%20332.385%20545.929%20329.34%20545.929H301.657V568.075Z'%20fill='%23E3316E'%3e%3c/path%3e%3cpath%20d='M748.119%20590.221V579.148H731.51V568.075H742.583V512.71H731.51V501.637H748.119V490.564H759.193V501.637H770.266V490.564H781.339V502.329C786.137%20503.621%20790.105%20506.226%20793.242%20510.146C796.38%20514.07%20797.948%20518.615%20797.948%20523.783C797.948%20526.459%20797.487%20529.019%20796.564%20531.462C795.641%20533.909%20794.35%20536.102%20792.689%20538.04C795.918%20539.977%20798.524%20542.607%20800.506%20545.929C802.492%20549.251%20803.485%20552.942%20803.485%20557.002C803.485%20563.092%20801.316%20568.306%20796.979%20572.643C792.643%20576.98%20787.429%20579.148%20781.339%20579.148V590.221H770.266V579.148H759.193V590.221H748.119ZM753.656%20534.856H775.802C778.847%20534.856%20781.455%20533.771%20783.625%20531.601C785.792%20529.434%20786.875%20526.828%20786.875%20523.783C786.875%20520.738%20785.792%20518.13%20783.625%20515.96C781.455%20513.793%20778.847%20512.71%20775.802%20512.71H753.656V534.856ZM753.656%20568.075H781.339C784.384%20568.075%20786.992%20566.992%20789.162%20564.825C791.328%20562.655%20792.412%20560.047%20792.412%20557.002C792.412%20553.957%20791.328%20551.349%20789.162%20549.179C786.992%20547.012%20784.384%20545.929%20781.339%20545.929H753.656V568.075Z'%20fill='%2329ABE2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_f_28_125'%20x='-1776.42'%20y='-933.328'%20width='5042.9'%20height='3238.54'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='214.956'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3cfilter%20id='filter1_f_28_125'%20x='-690.976'%20y='406.916'%20width='2847.99'%20height='1903.39'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='217.502'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3cfilter%20id='filter2_f_28_125'%20x='168.995'%20y='-478.345'%20width='2471.46'%20height='2320.67'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='181.252'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3cfilter%20id='filter3_f_28_125'%20x='-1781.51'%20y='640.209'%20width='2538.02'%20height='1473.07'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='217.502'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3cfilter%20id='filter4_f_28_125'%20x='-1151.47'%20y='821.653'%20width='1653.78'%20height='1150.26'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='145.002'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3cfilter%20id='filter5_f_28_125'%20x='-3682.93'%20y='-889.778'%20width='4172.37'%20height='3424.89'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='214.956'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3cfilter%20id='filter6_f_28_125'%20x='-2029.35'%20y='1022.69'%20width='2523.88'%20height='1517.51'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'%3e%3c/feFlood%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='BackgroundImageFix'%20result='shape'%3e%3c/feBlend%3e%3cfeGaussianBlur%20stdDeviation='217.502'%20result='effect1_foregroundBlur_28_125'%3e%3c/feGaussianBlur%3e%3c/filter%3e%3clinearGradient%20id='paint0_linear_28_125'%20x1='157.192'%20y1='121.747'%20x2='1007.88'%20y2='1050.41'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CD478F'%3e%3c/stop%3e%3cstop%20offset='0.234375'%20stop-color='white'%3e%3c/stop%3e%3cstop%20offset='0.422577'%20stop-color='%237230FF'%3e%3c/stop%3e%3cstop%20offset='0.661458'%20stop-color='%23009BFF'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='white'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='paint1_linear_28_125'%20x1='158.5'%20y1='121.083'%20x2='1008.5'%20y2='1049'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23CD478F'%3e%3c/stop%3e%3cstop%20offset='0.234375'%20stop-color='white'%3e%3c/stop%3e%3cstop%20offset='0.422577'%20stop-color='%237230FF'%3e%3c/stop%3e%3cstop%20offset='0.661458'%20stop-color='%23009BFF'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='white'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient%20id='paint2_linear_28_125'%20x1='1813.2'%20y1='428.212'%20x2='1181.97'%20y2='1226.61'%20gradientUnits='userSpaceOnUse'%3e%3cstop%20stop-color='%23994C7D'%3e%3c/stop%3e%3cstop%20offset='1'%20stop-color='%23BD609B'%3e%3c/stop%3e%3c/linearGradient%3e%3cradialGradient%20id='paint3_angular_28_125'%20cx='0'%20cy='0'%20r='1'%20gradientUnits='userSpaceOnUse'%20gradientTransform='translate(459.786%20540.414)%20rotate(27.3499)%20scale(130.293%20273.893)'%3e%3cstop%20offset='0.114066'%20stop-color='%2329ABE2'%3e%3c/stop%3e%3cstop%20offset='0.172608'%20stop-color='%2329ABE2'%3e%3c/stop%3e%3cstop%20offset='0.283514'%20stop-color='%23EE2A67'%3e%3c/stop%3e%3cstop%20offset='0.528748'%20stop-color='%23522785'%3e%3c/stop%3e%3cstop%20offset='0.638338'%20stop-color='%23D71F7A'%3e%3c/stop%3e%3cstop%20offset='0.923948'%20stop-color='%23F9A137'%3e%3c/stop%3e%3cstop%20offset='0.9928'%20stop-color='%2329ABE2'%3e%3c/stop%3e%3c/radialGradient%3e%3cclipPath%20id='clip0_28_125'%3e%3crect%20width='893.901'%20height='893.901'%20fill='white'%20transform='translate(92.6484%2093.4506)'%3e%3c/rect%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", oa = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2022.0.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns:ev='http://www.w3.org/2001/xml-events'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20318.6%20318.6'%20style='enable-background:new%200%200%20318.6%20318.6;'%20xml:space='preserve'%3e%3cstyle%20type='text/css'%3e%20.st0{fill:%23E2761B;stroke:%23E2761B;stroke-linecap:round;stroke-linejoin:round;}%20.st1{fill:%23E4761B;stroke:%23E4761B;stroke-linecap:round;stroke-linejoin:round;}%20.st2{fill:%23D7C1B3;stroke:%23D7C1B3;stroke-linecap:round;stroke-linejoin:round;}%20.st3{fill:%23233447;stroke:%23233447;stroke-linecap:round;stroke-linejoin:round;}%20.st4{fill:%23CD6116;stroke:%23CD6116;stroke-linecap:round;stroke-linejoin:round;}%20.st5{fill:%23E4751F;stroke:%23E4751F;stroke-linecap:round;stroke-linejoin:round;}%20.st6{fill:%23F6851B;stroke:%23F6851B;stroke-linecap:round;stroke-linejoin:round;}%20.st7{fill:%23C0AD9E;stroke:%23C0AD9E;stroke-linecap:round;stroke-linejoin:round;}%20.st8{fill:%23161616;stroke:%23161616;stroke-linecap:round;stroke-linejoin:round;}%20.st9{fill:%23763D16;stroke:%23763D16;stroke-linecap:round;stroke-linejoin:round;}%20%3c/style%3e%3cpolygon%20class='st0'%20points='274.1,35.5%20174.6,109.4%20193,65.8%20'/%3e%3cg%3e%3cpolygon%20class='st1'%20points='44.4,35.5%20143.1,110.1%20125.6,65.8%20'/%3e%3cpolygon%20class='st1'%20points='238.3,206.8%20211.8,247.4%20268.5,263%20284.8,207.7%20'/%3e%3cpolygon%20class='st1'%20points='33.9,207.7%2050.1,263%20106.8,247.4%2080.3,206.8%20'/%3e%3cpolygon%20class='st1'%20points='103.6,138.2%2087.8,162.1%20144.1,164.6%20142.1,104.1%20'/%3e%3cpolygon%20class='st1'%20points='214.9,138.2%20175.9,103.4%20174.6,164.6%20230.8,162.1%20'/%3e%3cpolygon%20class='st1'%20points='106.8,247.4%20140.6,230.9%20111.4,208.1%20'/%3e%3cpolygon%20class='st1'%20points='177.9,230.9%20211.8,247.4%20207.1,208.1%20'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st2'%20points='211.8,247.4%20177.9,230.9%20180.6,253%20180.3,262.3%20'/%3e%3cpolygon%20class='st2'%20points='106.8,247.4%20138.3,262.3%20138.1,253%20140.6,230.9%20'/%3e%3c/g%3e%3cpolygon%20class='st3'%20points='138.8,193.5%20110.6,185.2%20130.5,176.1%20'/%3e%3cpolygon%20class='st3'%20points='179.7,193.5%20188,176.1%20208,185.2%20'/%3e%3cg%3e%3cpolygon%20class='st4'%20points='106.8,247.4%20111.6,206.8%2080.3,207.7%20'/%3e%3cpolygon%20class='st4'%20points='207,206.8%20211.8,247.4%20238.3,207.7%20'/%3e%3cpolygon%20class='st4'%20points='230.8,162.1%20174.6,164.6%20179.8,193.5%20188.1,176.1%20208.1,185.2%20'/%3e%3cpolygon%20class='st4'%20points='110.6,185.2%20130.6,176.1%20138.8,193.5%20144.1,164.6%2087.8,162.1%20'/%3e%3c/g%3e%3cg%3e%3cpolygon%20class='st5'%20points='87.8,162.1%20111.4,208.1%20110.6,185.2%20'/%3e%3cpolygon%20class='st5'%20points='208.1,185.2%20207.1,208.1%20230.8,162.1%20'/%3e%3cpolygon%20class='st5'%20points='144.1,164.6%20138.8,193.5%20145.4,227.6%20146.9,182.7%20'/%3e%3cpolygon%20class='st5'%20points='174.6,164.6%20171.9,182.6%20173.1,227.6%20179.8,193.5%20'/%3e%3c/g%3e%3cpolygon%20class='st6'%20points='179.8,193.5%20173.1,227.6%20177.9,230.9%20207.1,208.1%20208.1,185.2%20'/%3e%3cpolygon%20class='st6'%20points='110.6,185.2%20111.4,208.1%20140.6,230.9%20145.4,227.6%20138.8,193.5%20'/%3e%3cpolygon%20class='st7'%20points='180.3,262.3%20180.6,253%20178.1,250.8%20140.4,250.8%20138.1,253%20138.3,262.3%20106.8,247.4%20117.8,256.4%20140.1,271.9%20178.4,271.9%20200.8,256.4%20211.8,247.4%20'/%3e%3cpolygon%20class='st8'%20points='177.9,230.9%20173.1,227.6%20145.4,227.6%20140.6,230.9%20138.1,253%20140.4,250.8%20178.1,250.8%20180.6,253%20'/%3e%3cg%3e%3cpolygon%20class='st9'%20points='278.3,114.2%20286.8,73.4%20274.1,35.5%20177.9,106.9%20214.9,138.2%20267.2,153.5%20278.8,140%20273.8,136.4%20281.8,129.1%20275.6,124.3%20283.6,118.2%20'/%3e%3cpolygon%20class='st9'%20points='31.8,73.4%2040.3,114.2%2034.9,118.2%2042.9,124.3%2036.8,129.1%2044.8,136.4%2039.8,140%2051.3,153.5%20103.6,138.2%20140.6,106.9%2044.4,35.5%20'/%3e%3c/g%3e%3cpolygon%20class='st6'%20points='267.2,153.5%20214.9,138.2%20230.8,162.1%20207.1,208.1%20238.3,207.7%20284.8,207.7%20'/%3e%3cpolygon%20class='st6'%20points='103.6,138.2%2051.3,153.5%2033.9,207.7%2080.3,207.7%20111.4,208.1%2087.8,162.1%20'/%3e%3cpolygon%20class='st6'%20points='174.6,164.6%20177.9,106.9%20193.1,65.8%20125.6,65.8%20140.6,106.9%20144.1,164.6%20145.3,182.8%20145.4,227.6%20173.1,227.6%20173.3,182.8%20'/%3e%3c/svg%3e", Xn = [
  // "stoic",
  "plug",
  "bitfinityWallet"
  // "phantom",
], kr = [
  "metamask"
], Bt = h(
  ({ walletType: e, eip6963: t }) => {
    switch (e || t?.name) {
      case "plug":
        return /* @__PURE__ */ w("div", { className: "flex flex-row justify-center items-center", children: [
          /* @__PURE__ */ a("img", { src: ca, className: "w-5 h-5 mr-1 inline" }),
          /* @__PURE__ */ a("span", { className: "mr-1", children: "Plug" })
        ] });
      case "bitfinityWallet":
        return /* @__PURE__ */ w("div", { className: "flex flex-row justify-center items-center", children: [
          /* @__PURE__ */ a(
            "img",
            {
              src: ia,
              className: "w-5 h-5 mr-1 inline"
            }
          ),
          /* @__PURE__ */ a("span", { children: "Bitfinity" })
        ] });
      // case "phantom":
      //   return (
      //     <div className="flex flex-row justify-center items-center">
      //       <img
      //         src="/icons/Phantom-Icon-Purple.svg"
      //         className="w-5 h-5 mr-2 inline"
      //       />
      //       <span>Phantom</span>
      //     </div>
      //   );
      case "MetaMask":
        return /* @__PURE__ */ w("div", { className: "flex flex-row justify-center items-center", children: [
          /* @__PURE__ */ a(
            "img",
            {
              src: oa,
              className: "w-5 h-5 mr-2 inline"
            }
          ),
          /* @__PURE__ */ a("span", { children: "Metamask" })
        ] });
      default:
        return t ? /* @__PURE__ */ w("div", { className: "flex flex-row justify-center items-center", children: [
          /* @__PURE__ */ a(
            "img",
            {
              src: t.icon,
              className: "w-5 h-5 mr-2 inline"
            }
          ),
          /* @__PURE__ */ a("span", { children: t.name })
        ] }) : /* @__PURE__ */ a("span", { children: e });
    }
  }
), Or = h(
  ({ label: e = "Wallet" }) => {
    const { walletType: t, setWalletType: n } = Et();
    return /* @__PURE__ */ a(
      Oe,
      {
        label: e,
        value: t,
        onChange: (r) => n(r),
        options: Xn.map((r) => ({
          value: r,
          label: /* @__PURE__ */ a(Bt, { walletType: r })
        }))
      }
    );
  }
), Nr = h(
  ({ receiver: e }) => e ? "principal" in e ? /* @__PURE__ */ a(
    k,
    {
      rightLabel: /* @__PURE__ */ a(Qe, { text: e.principal.toText() }),
      children: "Receiver Principal"
    }
  ) : "accountIdentifier" in e ? /* @__PURE__ */ a(
    k,
    {
      rightLabel: /* @__PURE__ */ a(Qe, { text: e.accountIdentifier.toHex() }),
      children: "Receiver Account ID"
    }
  ) : null : null
), Un = L(null), Ge = () => ee(Un), sa = h(({ currency: e }) => {
  const { web3WalletType: t, setWeb3WalletType: n, mode: r, web3WithdrawExternalWalletAddress: c, setWeb3WithdrawExternalWalletAddress: i } = Ge(), l = Se(e), { selectedWallet: o, wallets: A, connectWallet: s } = Ke();
  return l ? Object.keys(A).length === 0 ? /* @__PURE__ */ w("p", { className: "text-left type-subheadline pl-4", children: [
    "Please install ",
    /* @__PURE__ */ a("a", { href: "https://metamask.io/", target: "_blank", className: "underline hover:no-underline", children: "MetaMask" }),
    ",  ",
    /* @__PURE__ */ a("a", { href: "https://trustwallet.com/", className: "underline hover:no-underline", target: "_blank", children: "Trust Wallet" }),
    ",  ",
    /* @__PURE__ */ a("a", { href: "https://www.okx.com/", className: "underline hover:no-underline", target: "_blank", children: "OKX" }),
    " or any other ",
    /* @__PURE__ */ a("a", { href: "https://eip6963.org/", className: "underline hover:no-underline", target: "_blank", children: "EIP-6963 compatible wallet" })
  ] }) : /* @__PURE__ */ a(x, { children: /* @__PURE__ */ a(
    Oe,
    {
      label: r === "deposit" ? "From" : "To",
      value: o?.info.rdns,
      options: Object.entries(A).map(([d, { info: f }]) => ({ label: /* @__PURE__ */ a(Bt, { eip6963: f }), value: d })),
      onChange: (d) => s(d)
    }
  ) }) : /* @__PURE__ */ w(x, { children: [
    /* @__PURE__ */ a(
      Oe,
      {
        label: r === "deposit" ? "From" : "To",
        value: t,
        options: [
          ...Xn.map((d) => ({
            label: /* @__PURE__ */ a(Bt, { walletType: d }),
            value: d
          })),
          { label: "External wallet", value: "external" }
        ],
        onChange: (d) => n(d)
      }
    ),
    !l && t === "external" && r === "withdraw" && /* @__PURE__ */ a(
      xt,
      {
        label: "External account ID or principal",
        value: c,
        onChange: i
      }
    )
  ] });
}, (e, t) => T.serialize(e.currency) === T.serialize(t.currency)), la = h(({ allowance: e, currencyType: t }) => /* @__PURE__ */ w(
  k,
  {
    rightLabel: e ? /* @__PURE__ */ a(
      J,
      {
        currencyType: t,
        variant: "inline",
        currencyValue: e.allowance
      }
    ) : /* @__PURE__ */ a(ln, {}),
    children: [
      /* @__PURE__ */ a(I, { currencyType: t }),
      " allowance"
    ]
  }
), (e, t) => JSON.stringify(e) === JSON.stringify(t)), da = h(({ currency: e }) => {
  const t = Kt(e), n = Kt({ CKETHToken: { ETH: null } }), r = O0(e);
  return !t || !n ? /* @__PURE__ */ a(x, {}) : n.allowance + t.allowance === 0n ? /* @__PURE__ */ a(x, {}) : /* @__PURE__ */ w("div", { children: [
    /* @__PURE__ */ a("p", { className: "type-callout text-material-medium-2 mr-auto mb-2", children: "Allowance" }),
    /* @__PURE__ */ w(F, { children: [
      /* @__PURE__ */ a(la, { allowance: t, currencyType: { Real: e } }),
      t && t.allowance > 0n && /* @__PURE__ */ a(k, { onClick: () => r(0n), children: "Withdraw allowance" })
    ] })
  ] });
}), Aa = h(({ currency: e }) => {
  const { amount: t, setAmount: n, mode: r } = Ge(), c = Le({ Real: e }), { meta: { thousands: i } } = a0({ Real: e }), l = fe({ Real: e }), o = Se(e), { selectedWallet: A } = Ke(), s = P0(), d = ue({ Real: e }), f = z(() => "CKETHToken" in e && "ETH" in e.CKETHToken, [e]);
  return s ? /* @__PURE__ */ w(x, { children: [
    o && /* @__PURE__ */ a(da, { currency: e }),
    /* @__PURE__ */ w(F, { children: [
      /* @__PURE__ */ a(
        on,
        {
          label: "Amount",
          value: Number(t) / i,
          onChange: (g) => n(BigInt(Math.floor(g * i))),
          min: 0,
          max: r === "deposit" ? void 0 : D2(
            l,
            d
          ),
          symbol: /* @__PURE__ */ a(Me, { className: "w-[24px] h-[24px] mr-1", currencyType: { Real: e } })
        }
      ),
      o ? /* @__PURE__ */ a(x, { children: r === "withdraw" && /* @__PURE__ */ a(
        k,
        {
          rightLabel: s[f ? "ckETHToETH" : "ckERC20ToERC20"] > 1000000n ? /* @__PURE__ */ a(
            J,
            {
              currencyType: { Real: { CKETHToken: { ETH: null } } },
              variant: "inline",
              currencyValue: s[f ? "ckETHToETH" : "ckERC20ToERC20"]
            }
          ) : /* @__PURE__ */ w("span", { children: [
            wt(s[f ? "ckETHToETH" : "ckERC20ToERC20"], 9),
            " gwei"
          ] }),
          children: "Fee"
        }
      ) }) : /* @__PURE__ */ a(
        k,
        {
          rightLabel: /* @__PURE__ */ a(
            J,
            {
              currencyType: { Real: e },
              variant: "inline",
              currencyValue: c
            }
          ),
          children: "Fee"
        }
      ),
      /* @__PURE__ */ a(sa, { currency: e })
    ] }, o ? `Eth-${r}` : "IC"),
    t > 0n && o && A && /* @__PURE__ */ w(F, { variant: { type: "default", readonly: !0, variant: "alert" }, children: [
      f && /* @__PURE__ */ a(k, { className: "text-sm", children: "The minimum withdrawal for eth is 0.03." }),
      r === "deposit" ? /* @__PURE__ */ w(x, { children: [
        /* @__PURE__ */ w(k, { className: "text-sm", children: [
          "Make sure to leave the this modal open until both the spending cap and the transfer requests on your ",
          A.info.name,
          " wallet are approved."
        ] }),
        /* @__PURE__ */ w(k, { className: "text-sm", children: [
          "After the transfer has been submitted it will take up to 20 minutes for your ",
          /* @__PURE__ */ a(I, { currencyType: { Real: e } }),
          " to arrive."
        ] })
      ] }) : /* @__PURE__ */ w(k, { className: "text-sm", children: [
        "ChainFusion will mint the wrapped ",
        /* @__PURE__ */ a(I, { currencyType: { Real: e } }),
        ". This process can take up to 20 minutes."
      ] })
    ] }, e + r)
  ] }) : /* @__PURE__ */ a(ln, {});
}, (e, t) => T.serialize(e.currency) === T.serialize(t.currency)), Re = () => {
  const { authData: e } = W();
  return z(
    () => S2.create({
      canisterId: M.from(b0),
      agent: e?.agent
    }),
    [e?.agent]
  );
}, qn = () => {
  const e = Re(), { authData: t } = W();
  return Z({
    queryKey: ["btc-deposit-address", t?.principal.toText()],
    queryFn: () => e.getBtcAddress({})
  });
}, pa = () => {
  const e = Re();
  return Z({
    queryKey: ["btc-withdrawal-account"],
    queryFn: () => e.getWithdrawalAccount()
  });
}, ua = () => {
  const e = Re();
  return Z({
    queryKey: ["btc-minter-info"],
    queryFn: () => e.getMinterInfo({}),
    initialData: {
      retrieve_btc_min_amount: 50000n,
      min_confirmations: 6,
      kyt_fee: 100n
    }
  });
}, fa = h(() => {
  Te();
  const { data: e, isPending: t, error: n } = qn();
  return /* @__PURE__ */ w(x, { children: [
    t ? /* @__PURE__ */ a(Ee, { children: "Fetching deposit address" }) : /* @__PURE__ */ w(x, { children: [
      /* @__PURE__ */ a(k, { children: e }),
      /* @__PURE__ */ a("p", { className: "px-4 type-footnote text-material-medium-1", children: "To deposit BTC, please send your Bitcoin to the address displayed above. Ensure that you double-check the address before initiating the transaction to avoid any errors. Transactions may take some time to confirm on the Bitcoin network." })
    ] }),
    /* @__PURE__ */ a(
      ce,
      {
        error: n
      }
    )
  ] });
}), Kn = h(({ currency: e }) => {
  const { isNativeShown: t, setIsNativeShown: n } = Pt(), { authData: r } = Ge(), c = fe(e ? { Real: e } : { Fake: null }), i = Se(e), l = Yn(e);
  Te();
  const o = z(() => t ? r.principal.toText() : "", [t, r.principal.toText()]);
  return "BTC" in e ? /* @__PURE__ */ a(fa, {}) : i ? /* @__PURE__ */ w(x, { children: [
    /* @__PURE__ */ a(
      k,
      {
        rightLabel: /* @__PURE__ */ a(
          J,
          {
            currencyType: e ? { Real: e } : { Fake: null },
            variant: "inline",
            currencyValue: c
          }
        ),
        children: "Balance"
      }
    ),
    /* @__PURE__ */ w(
      "div",
      {
        className: "type-subheadline text-material-medium-1 px-4 w-full text-start",
        children: [
          "This currency is wrapped into ",
          /* @__PURE__ */ a(I, { currencyType: { Real: e } }),
          " using Chain Fusion.",
          " ",
          /* @__PURE__ */ w(gt, { className: "inline underline hover:no-underline", onClick: () => n(!1), children: [
            "Use ",
            /* @__PURE__ */ a(I, { currencyType: { Real: e } }),
            " instead"
          ] })
        ]
      }
    )
  ] }) : /* @__PURE__ */ w(x, { children: [
    /* @__PURE__ */ w("div", { className: "flex flex-col lg:flex-row gap-3 lg:items-center", children: [
      /* @__PURE__ */ a(a2, { className: "lg:flex hidden", value: o }),
      /* @__PURE__ */ w(F, { children: [
        /* @__PURE__ */ a(
          k,
          {
            rightLabel: /* @__PURE__ */ a(Qe, { text: r.principal.toText() }),
            children: "Principal"
          }
        ),
        /* @__PURE__ */ a(
          k,
          {
            rightLabel: /* @__PURE__ */ a(
              Qe,
              {
                text: r.accountIdentifier.toHex()
              }
            ),
            children: /* @__PURE__ */ a("span", { className: "whitespace-nowrap", children: "Account ID" })
          }
        ),
        /* @__PURE__ */ a(
          k,
          {
            rightLabel: /* @__PURE__ */ a(
              J,
              {
                currencyType: { Real: e },
                variant: "inline",
                currencyValue: c
              }
            ),
            children: "Balance"
          }
        )
      ] })
    ] }, "ICP-NATIVE"),
    l && /* @__PURE__ */ w(
      "div",
      {
        className: "type-subheadline text-material-medium-1 px-4 w-full text-start",
        children: [
          "You are seeing the wrapped ",
          /* @__PURE__ */ a(I, { currencyType: { Real: e } }),
          " using Chain Fusion.",
          " ",
          /* @__PURE__ */ w(gt, { className: "inline underline hover:no-underline", onClick: () => n(!0), children: [
            "Use native ",
            /* @__PURE__ */ a(I, { currencyType: { Real: e } }),
            " instead"
          ] })
        ]
      }
    )
  ] });
}, (e, t) => T.serialize(e.currency) === T.serialize(t.currency)), ma = "dd.MM.yyyy HH:mm", wa = (e) => N2(e, ma), ga = 2, ya = h(
  ({ txid: e, status: t, vout: n, fee: r, btcAddress: c, currentHeight: i, requiredConfirmations: l }) => {
    const o = z(
      () => n.filter((d) => d.scriptpubkey_address === c).reduce((d, f) => d + BigInt(f.value || 0), BigInt(0)),
      [c, n]
    ), A = z(() => !t.confirmed || t.block_height == null ? 0 : i - t.block_height + 1, [t.confirmed, t.block_height, i]), s = z(() => t.confirmed ? A >= l + ga : !1, [t.confirmed, A, l]);
    return o ? /* @__PURE__ */ w(
      F,
      {
        className: "mb-2",
        label: t.block_time && wa(new Date(t.block_time)),
        ctas: [
          {
            label: "View on Mempool",
            href: `https://mempool.space/tx/${e}`,
            isOutLink: !0
          }
        ],
        children: [
          /* @__PURE__ */ a(k, { rightLabel: /* @__PURE__ */ a("span", { className: "truncate w-full overflow-hidden max-w-[250px]", children: e }), children: "Transaction" }),
          /* @__PURE__ */ a(k, { rightLabel: s ? /* @__PURE__ */ a("span", { className: "text-green-500", children: "Confirmed" }) : /* @__PURE__ */ a(Ee, { variant: "shimmer", children: "Processing" }), children: "Status" }),
          /* @__PURE__ */ a(k, { rightLabel: /* @__PURE__ */ a(J, { currencyType: { Real: { BTC: null } }, currencyValue: BigInt(r) }), children: "Fee" }),
          /* @__PURE__ */ a(
            k,
            {
              rightLabel: /* @__PURE__ */ w(x, { children: [
                o > 0 ? "+" : "",
                /* @__PURE__ */ a(
                  J,
                  {
                    currencyType: { Real: { BTC: null } },
                    currencyValue: o,
                    className: _({
                      "text-green-500": o > 0,
                      "text-red-500": o < 0
                    })
                  }
                )
              ] }),
              children: "Balance Update"
            }
          )
        ]
      }
    ) : null;
  },
  (e, t) => e.txid === t.txid && e.status.confirmed === t.status.confirmed && e.vin.length === t.vin.length && e.vout.length === t.vout.length && e.currentHeight === t.currentHeight
), ha = h(({ btcAddress: e, requiredConfirmations: t }) => {
  const n = tn(G2({
    hostname: "mempool.space"
  })), { data: r, isPending: c } = Z({
    queryKey: ["btc-transactions", e],
    queryFn: async () => {
      const [i, l] = await Promise.all([
        n.current.bitcoin.addresses.getAddressTxs({ address: e }),
        fetch("https://mempool.space/api/blocks/tip/height").then((o) => o.json())
      ]);
      return { txs: i, currentHeight: l };
    }
  });
  return c ? /* @__PURE__ */ a(Ee, { children: "Loading transactions" }) : !r || r.txs.length === 0 ? null : /* @__PURE__ */ a(x, { children: r.txs.map((i) => /* @__PURE__ */ a(
    ya,
    {
      ...i,
      requiredConfirmations: t,
      btcAddress: e,
      currentHeight: r.currentHeight
    },
    i.txid
  )) });
}), va = h(({ onBack: e }) => {
  const { requiredBalance: t, mode: n, amount: r, setAmount: c, setMode: i, authData: l, continueMutation: o } = Ge(), A = Pe(), [s, d] = de("use-lazereyes-for-transfer", !0), [f, g] = de("manual-btc-address", A.address);
  Te();
  const u = Re(), p = ua(), { data: m } = qn(), { data: C } = pa(), y = Vn(C ? {
    currencyType: { Real: { BTC: null } },
    receiver: { principal: C.owner },
    name: "BTC Minter"
  } : void 0), b = fe({ Real: { BTC: null } }), B = Q({
    mutationFn: async () => {
      if (await y.require({ amount: r, reason: "Withdraw BTC" }, yt(/* @__PURE__ */ new Date(), 20)), s) {
        if (!f)
          throw new Error("No address found");
        return u.retrieveBtcWithApproval({ address: f, amount: r });
      }
      if (!A.address)
        throw new Error("No address found");
      return u.retrieveBtcWithApproval({ address: A.address, amount: r });
    }
  }), O = Q({
    mutationFn: async () => {
      if (!s)
        throw new v("You need to use Lazereyes for auto deposit");
      if (!m)
        throw new Error("No deposit address found");
      return A.sendBTC(m, Number(r));
    }
  });
  return l.type !== "siwb" ? null : /* @__PURE__ */ w("div", { className: "gap-3 flex flex-col", children: [
    /* @__PURE__ */ w(hn, { children: [
      /* @__PURE__ */ w("div", { className: "flex flex-col gap-2 mb-6", children: [
        /* @__PURE__ */ a(r2, { children: "Balance" }),
        /* @__PURE__ */ a(
          J,
          {
            currencyType: { Real: { BTC: null } },
            currencyValue: b,
            className: "p-4 bg-material-main-1 rounded-[12px] w-full",
            size: "big"
          },
          "balance"
        )
      ] }),
      m && /* @__PURE__ */ a(
        ha,
        {
          requiredConfirmations: p.data.min_confirmations,
          btcAddress: m
        }
      ),
      !t && /* @__PURE__ */ a(
        dn,
        {
          tabs: [
            { label: "Deposit", value: "deposit" },
            { label: "Withdraw", value: "withdraw" }
          ],
          value: n,
          onChange: (P) => i(P)
        },
        "tabs"
      ),
      /* @__PURE__ */ a(
        sn,
        {
          label: `Use your ${Gt[l.provider.provider].label} wallet`,
          checked: s,
          onChange: d
        },
        "lazereyes-switch"
      ),
      n === "withdraw" && /* @__PURE__ */ a(
        Dt,
        {
          currencyType: { Real: { BTC: null } },
          label: "Amount",
          value: r,
          min: p.data.retrieve_btc_min_amount,
          max: b,
          onChange: c
        },
        "withdraw"
      ),
      n === "withdraw" && /* @__PURE__ */ w("div", { className: "opacity-70 flex flex-row px-4", children: [
        "Minimum withdrawal is ",
        /* @__PURE__ */ a(J, { className: "flex mx-1", currencyType: { Real: { BTC: null } }, currencyValue: p.data.retrieve_btc_min_amount })
      ] }),
      n === "deposit" && s && /* @__PURE__ */ a(
        Dt,
        {
          currencyType: { Real: { BTC: null } },
          label: "Amount",
          value: r,
          min: 1n,
          onChange: c
        },
        "deposit"
      ),
      !s && n === "deposit" && /* @__PURE__ */ a(Kn, { currency: { BTC: null } }, "wallet-display"),
      !s && n === "withdraw" && /* @__PURE__ */ a(
        xt,
        {
          label: "Receiver BTC address",
          value: f,
          onChange: (P) => g(P)
        },
        "manual-btc-address"
      ),
      B.error && /* @__PURE__ */ a(ce, { title: "Withdrawal error", error: B.error }),
      O.error && /* @__PURE__ */ a(ce, { title: "Deposit error", error: O.error })
    ] }),
    /* @__PURE__ */ w(Ze, { children: [
      /* @__PURE__ */ a(q, { variant: "naked", onClick: e, children: "Cancel" }),
      n === "deposit" && s && /* @__PURE__ */ a(
        q,
        {
          onClick: O.mutateAsync,
          isLoading: O.isPending,
          children: "Deposit"
        }
      ),
      n === "withdraw" && /* @__PURE__ */ a(
        q,
        {
          onClick: B.mutateAsync,
          isLoading: B.isPending,
          children: "Withdraw"
        }
      )
    ] })
  ] });
}), Ca = h(({ currency: e, onBack: t }) => {
  const { requiredBalance: n, mode: r, setMode: c, web3WalletType: i, authData: l, withdraw: o, deposit: A, continueMutation: s } = Ge(), d = An(), f = Se(e), g = Pn(
    { Real: e },
    l?.principal
  );
  return "BTC" in e ? /* @__PURE__ */ a(va, { onBack: t }) : /* @__PURE__ */ w(x, { children: [
    /* @__PURE__ */ w("div", { className: "gap-3 flex flex-col", children: [
      /* @__PURE__ */ a("p", { className: "type-callout text-material-medium-2", children: "Your ZKP wallet" }),
      /* @__PURE__ */ a(Kn, { currency: e }),
      /* @__PURE__ */ w(mt, { children: [
        !d && !n && /* @__PURE__ */ a(
          dn,
          {
            tabs: [
              { label: "Deposit", value: "deposit" },
              { label: "Withdraw", value: "withdraw" }
            ],
            value: r,
            onChange: (u) => c(u)
          }
        ),
        d && r === "withdraw" && /* @__PURE__ */ a("p", { children: "Withdraw" }),
        /* @__PURE__ */ a(Aa, { currency: e }),
        r === "deposit" && i === "external" && !f && /* @__PURE__ */ a("p", { className: "type-callout text-material-medium-2", children: "Use your external wallet to deposit funds to your ZKP wallet" }),
        /* @__PURE__ */ a(
          ce,
          {
            error: g.error || o.error || A.error
          }
        ),
        A.isPending || g.isPending && /* @__PURE__ */ a(c2, {}),
        /* @__PURE__ */ w(Ze, { children: [
          /* @__PURE__ */ a(q, { variant: "naked", onClick: t, children: "Cancel" }),
          r === "deposit" ? /* @__PURE__ */ a(
            q,
            {
              onClick: A.mutateAsync,
              isLoading: A.isPending || g.isPending,
              children: "Deposit"
            }
          ) : /* @__PURE__ */ a(
            q,
            {
              onClick: o.mutateAsync,
              isLoading: o.isPending,
              children: "Withdraw"
            }
          )
        ] })
      ] })
    ] }),
    n && /* @__PURE__ */ w(x, { children: [
      /* @__PURE__ */ a(ce, { error: s.error }),
      /* @__PURE__ */ w(Ze, { children: [
        /* @__PURE__ */ a(q, { variant: "naked", onClick: t, children: "Cancel" }),
        /* @__PURE__ */ a(
          q,
          {
            onClick: s.mutateAsync,
            isLoading: s.isPending,
            children: "Continue"
          }
        )
      ] })
    ] })
  ] });
}, (e, t) => T.serialize(e.currency) === T.serialize(t.currency) && e.onBack === t.onBack), Ta = h(({ currency: e, onClick: t }) => {
  const n = fe({ Real: e }), r = ue({ Real: e });
  return /* @__PURE__ */ a(
    k,
    {
      icon: /* @__PURE__ */ a("div", { className: "size-12 flex justify-center items-center p-2", children: /* @__PURE__ */ a(r0, { className: "", currency: e }) }),
      rightLabel: Ae(n, r),
      onClick: t,
      children: /* @__PURE__ */ w("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ a("div", { className: "type-title", children: /* @__PURE__ */ a(c0, { currencyType: { Real: e } }) }),
        /* @__PURE__ */ a("div", { className: "type-caption text-material-medium-2", children: /* @__PURE__ */ a(I, { currencyType: { Real: e } }) })
      ] })
    }
  );
}, (e, t) => T.serialize(e.currency) === T.serialize(t.currency) && e.onClick === t.onClick), Ba = Ne, ba = h(({ onBack: e, onSubmit: t, requiredBalance: n, children: r, currency: c }) => {
  const { authData: i } = W(), { addToast: l } = qe(), o = Et(), A = Pn(
    c ? { Real: c } : { Fake: null },
    i?.principal
  ), [s, d] = E(0n), f = An(), [g, u] = E(
    f ? "withdraw" : "deposit"
  ), p = z(
    () => n ? "deposit" : g,
    [g, n]
  ), m = Le(c ? { Real: c } : { Fake: null }), [C, y] = de("web3-wallet-type", o.walletType ?? "plug"), [
    b,
    B
  ] = de("web3-preferredWithdrawExternalWalletAddress", ""), O = Se(c || { ICP: null });
  X(() => {
    f && (y("external"), u("withdraw"));
  }, [f]), X(() => {
    C !== "external" && o.setWalletType(C);
  }, [C]);
  const P = fe(c ? { Real: c } : { Fake: null });
  i2();
  const H = Pt(), N = Q({
    mutationFn: async () => {
      if (!i) throw new v("No auth data found");
      if (!s) throw new v("No amount to withdraw found");
      if (!c) throw new v("No currency found");
      if ("Fake" in c)
        throw new v("Cannot withdraw fake currency");
      if (O)
        return await H.withdraw(c, s);
      if (!C) throw new v("No wallet type found");
      let V, j, ne;
      switch (C) {
        case "external":
          if (!b)
            throw new v("No external wallet address value found");
          if (b.indexOf("-") === -1) {
            if (!("ICP" in c))
              throw new v(
                "External wallet address must be a principal for ICRC transfers"
              );
            ne = re.fromHex(b);
          } else
            j = M.fromText(b);
          break;
        default:
          await window.ic[C].isConnected() || await window.ic[C].requestConnect({ host: Ba }), j = await window.ic[C].getPrincipal();
          break;
      }
      if (j) V = { principal: j };
      else if (ne) V = { accountIdentifier: ne };
      else
        throw new v("No principal or account identifier found");
      if (!V) throw new v("No receiver found");
      const { meta: be } = await Xe(i.agent, c);
      try {
        await Nn({ Real: c }, V, s, i);
      } catch (me) {
        throw me instanceof v ? me : new v(
          `Transfer failed. Please check your balance and try again. (Transaction fee is ${Ae(
            m,
            be
          )} ${ve(c)})`
        );
      }
    },
    onSuccess: () => {
      if (!c) throw new v("No currency found");
      S._balanceModalBalance.invalidate({ Real: c }), S.walletBalance.invalidate({ Real: c }, i), l({
        children: /* @__PURE__ */ w(x, { children: [
          /* @__PURE__ */ a("span", { className: "flex flex-row mr-1", children: /* @__PURE__ */ a(J, { currencyType: { Real: c }, variant: "inline", currencyValue: s }) }),
          ` ${ve(c)} has been withdrawn from your ZKP wallet`
        ] })
      });
    }
  }), te = Q({
    mutationFn: async () => {
      if (!i) throw new v("No auth data found");
      if (!s) throw new v("No amount to deposit found");
      if (!c) throw new v("No currency found");
      if (O)
        return await H.deposit(c, s);
      if (C === "external")
        throw new v(
          "If manually depositing to an external wallet, please use the external wallet deposit form"
        );
      await A.mutateAsync(s);
    },
    onSuccess: () => {
      if (!c) throw new v("No currency found");
      S.walletBalance.invalidate({ Real: c }, i), S._balanceModalBalance.invalidate({ Real: c });
    }
  }), Be = Q({
    mutationFn: async () => {
      if (!t || !i) return;
      let V = P ?? 0n;
      if (!c) throw new v("No currency found");
      const j = await Xe(i.agent, c);
      if (C !== "external" && (await te.mutateAsync(), V = await Mt({ Real: c }, i)), n && n.currencyValue && n.currencyValue > V)
        throw new v(
          `Insufficient balance.
A balance of ${Ae(
            n.currencyValue,
            j.meta
          )} ${pe(n.currencyType)} is required to continue.`
        );
      return t(V);
    },
    onSuccess: () => {
      t ? t(n?.currencyValue ?? 0n) : e();
    }
  });
  return i ? /* @__PURE__ */ a(
    Un.Provider,
    {
      value: {
        deposit: te,
        withdraw: N,
        continueMutation: Be,
        currency: c,
        authData: i,
        web3WalletType: C,
        setWeb3WalletType: y,
        web3WithdrawExternalWalletAddress: b,
        setWeb3WithdrawExternalWalletAddress: B,
        mode: p,
        setMode: u,
        amount: s,
        setAmount: d,
        requiredBalance: n
      },
      children: r
    }
  ) : /* @__PURE__ */ a("p", { children: "No principal or account found" });
}), Er = h(({ onBack: e, onSubmit: t, requiredBalance: n }) => {
  const r = D(), [c, i] = E(
    n?.currencyType === void 0 || "Fake" in n.currencyType ? void 0 : n?.currencyType.Real
  ), l = z(() => r ? { BTC: null } : c, [c, r]), { authData: o } = W(), [A, s] = E(!1), d = _e();
  return o ? /* @__PURE__ */ w(
    ba,
    {
      onBack: e,
      onSubmit: t,
      requiredBalance: n,
      currency: l,
      children: [
        /* @__PURE__ */ a(St, { isOpen: A, onClose: () => s(!1) }),
        l ? /* @__PURE__ */ w(mt, { children: [
          r ? /* @__PURE__ */ a(He, { children: "You BTC wallet" }) : /* @__PURE__ */ w(x, { children: [
            /* @__PURE__ */ a(He, { children: /* @__PURE__ */ a(
              o2,
              {
                options: d.highlightedCurrencies.map((f) => ({
                  value: T.serialize(f),
                  label: /* @__PURE__ */ a(Ce, { currencyType: { Real: f } })
                })),
                value: T.serialize(l),
                onChange: (f) => i(typeof f == "string" ? T.deserialize(f) : void 0)
              }
            ) }),
            /* @__PURE__ */ a(s2, { onClick: () => i(void 0), children: "Wallet" })
          ] }),
          /* @__PURE__ */ a(Ca, { currency: l, onBack: () => i(void 0) })
        ] }, "Currency") : /* @__PURE__ */ w(mt, { children: [
          /* @__PURE__ */ a(He, { children: "Wallet" }),
          /* @__PURE__ */ a(
            F,
            {
              label: "Tokens",
              ctas: [
                { label: "Add a token", onClick: () => s(!0) }
              ],
              children: d.highlightedCurrencies.map((f) => /* @__PURE__ */ a(Ta, { currency: f, onClick: () => i(f) }, T.serialize(f)))
            }
          )
        ] }, "no currency")
      ]
    }
  ) : /* @__PURE__ */ a("p", { children: "No principal or account found" });
}), $t = h(
  ({ address: e, request: t, resolve: n, reject: r, type: c, expires_at: i }) => {
    const l = Hn(e), o = z(() => {
      switch (c) {
        case "update":
          return t.amount === 0n ? "Revoke" : "Approve";
        case "require":
          return "Ok";
      }
    }, [c, t.amount]);
    return /* @__PURE__ */ w(
      bt,
      {
        open: !0,
        onClose: () => r(new v("User cancelled")),
        title: t.reason,
        children: [
          /* @__PURE__ */ w(F, { children: [
            /* @__PURE__ */ w(k, { rightLabel: "principal" in e.receiver ? e.receiver.principal.toText() : e.receiver.accountIdentifier.toHex(), children: [
              e.name,
              " address"
            ] }),
            /* @__PURE__ */ a(k, { rightLabel: /* @__PURE__ */ a(J, { currencyType: e.currencyType, currencyValue: l }), children: "Current allowance" }),
            /* @__PURE__ */ w(k, { rightLabel: /* @__PURE__ */ a(J, { currencyType: e.currencyType, currencyValue: t.amount }), children: [
              c === "require" ? "Required" : "New",
              " allowance"
            ] })
          ] }),
          /* @__PURE__ */ w(Ze, { children: [
            /* @__PURE__ */ a(
              q,
              {
                variant: "naked",
                onClick: () => r(new v("User cancelled")),
                children: "Cancel"
              }
            ),
            /* @__PURE__ */ a(
              q,
              {
                onClick: () => {
                  n();
                },
                children: o
              }
            )
          ] })
        ]
      }
    );
  }
), xa = h(({ children: e }) => {
  const [t, n] = E(), [r, c] = E(), i = z(() => ({
    setAllowance: async (l, o, A) => new Promise((s, d) => {
      n({
        address: l,
        request: o,
        expires_at: A,
        resolve: () => {
          n(void 0), s();
        },
        reject: (f) => {
          n(void 0), d(f);
        }
      });
    }),
    requireAllowance: async (l, o, A) => new Promise((s, d) => {
      c({
        address: l,
        request: o,
        expires_at: A,
        resolve: () => {
          c(void 0), s();
        },
        reject: (f) => {
          c(void 0), d(f);
        }
      });
    })
  }), []);
  return /* @__PURE__ */ w(Mn.Provider, { value: i, children: [
    t && /* @__PURE__ */ a(
      $t,
      {
        ...t,
        type: "update"
      }
    ),
    r && /* @__PURE__ */ a(
      $t,
      {
        ...r,
        type: "require"
      }
    ),
    e
  ] });
}), za = L({
  updateBalance: async () => {
  }
}), ka = h(({ children: e }) => {
  const { authData: t } = W(), n = Re(), r = Ve({
    queryKey: ["btc", "updateBalance"],
    queryFn: () => n.updateBalance({
      owner: t?.principal
    }),
    refetchInterval: 6e4,
    // 1 minute
    enabled: !!t?.principal
  });
  return /* @__PURE__ */ a(
    za.Provider,
    {
      value: {
        updateBalance: async () => {
          await r.refetch();
        }
      },
      children: e
    }
  );
}), Oa = h(
  ({ children: e }) => D() ? /* @__PURE__ */ a(ka, { children: e }) : e
), en = "manual-wallet-type", Na = h(
  ({ children: e }) => {
    const [t, n] = E(
      localStorage.getItem(
        en
      ) || "plug"
    );
    return X(() => {
      localStorage.setItem(en, t);
    }, [t]), /* @__PURE__ */ a(
      En.Provider,
      {
        value: {
          walletType: t,
          setWalletType: async (r) => n(r)
        },
        children: e
      }
    );
  }
), Pr = h(({
  children: e,
  disabledNetworks: t,
  enabledNetworks: n,
  siwbProviderCanisterId: r = L0
}) => /* @__PURE__ */ a(
  _0,
  {
    disabledNetworks: t,
    enabledNetworks: n,
    children: /* @__PURE__ */ a(ra, { children: /* @__PURE__ */ a(Sa, { siwbProviderCanisterId: r, children: /* @__PURE__ */ a(I0, { children: /* @__PURE__ */ a(H2, { children: /* @__PURE__ */ a(Na, { children: /* @__PURE__ */ a(G0, { children: /* @__PURE__ */ a(xa, { children: /* @__PURE__ */ a(Oa, { children: e }) }) }) }) }) }) }) })
  }
)), Ea = () => {
  const {
    prepareLogin: e,
    isPrepareLoginIdle: t,
    login: n,
    clear: r,
    connectedBtcAddress: c,
    getAddress: i,
    identity: l
  } = Te(), [o, A] = E(!1), s = i(), d = Ve({
    queryKey: ["prepare-login", s],
    queryFn: async () => {
      if (!s) throw new Error("No address available");
      return await e(), !0;
    },
    enabled: !!s && t,
    staleTime: 1 / 0,
    retry: !1
  }), f = Ve({
    queryKey: [
      "perform-login",
      c,
      l?.getPrincipal().toText(),
      o
    ],
    queryFn: async () => {
      if (!(!c || l || !o))
        return await n(), !0;
    },
    enabled: !!c && !l && o,
    staleTime: 1 / 0,
    retry: !1
  });
  return Ve({
    queryKey: ["clear-login", l?.getPrincipal().toText()],
    queryFn: async () => {
      l && (l.getDelegation().delegations.every(
        (g) => g.delegation.expiration >= cn(/* @__PURE__ */ new Date())
      ) || await r());
    },
    enabled: !!l,
    staleTime: 1 / 0,
    retry: !1
  }), {
    prepareQuery: d,
    loginQuery: f,
    manuallyTrigger: () => A(!0)
  };
}, Pa = [
  yn,
  wn,
  // PHANTOM,
  mn,
  gn,
  fn,
  un,
  pn
], Gt = {
  [yn]: {
    Icon: h(v2),
    label: "Unisat"
  },
  [gn]: {
    Icon: h(h2),
    label: "Wizz"
  },
  [wn]: {
    Icon: h(y2),
    label: "Xverse"
  },
  // [PHANTOM]: {
  //   Icon: memo(PhantomLogo),
  //   label: "Phantom",
  // },
  [mn]: {
    Icon: h(g2),
    label: "OKX"
  },
  [fn]: {
    Icon: h(w2),
    label: "Leather"
  },
  [un]: {
    Icon: h(m2),
    label: "Magic Eden"
  },
  [pn]: {
    Icon: h(f2),
    label: "Oyl"
  }
}, In = L({
  loading: !1,
  clear: () => {
  },
  signInMutation: {}
}), Ma = h(({ children: e }) => {
  const { addToast: t } = qe(), n = Pe(), {
    selectedProvider: r,
    identity: c,
    connectedBtcAddress: i,
    clear: l,
    setLaserEyes: o
  } = Te(), { prepareQuery: A, loginQuery: s, manuallyTrigger: d } = Ea(), f = Q({
    mutationFn: async (g) => (d(), o(n, g))
  });
  return X(() => {
    s.isSuccess && t({ children: "Connected to your wallet" });
  }, [s.isSuccess]), /* @__PURE__ */ a(
    In.Provider,
    {
      value: {
        identity: c,
        connectedBtcAddress: i,
        clear: l,
        selectedProvider: r,
        signInMutation: f,
        loading: A.isLoading || s.isLoading,
        error: A.error || s.error
      },
      children: e
    }
  );
}), Sa = h(
  ({ children: e, siwbProviderCanisterId: t }) => {
    const n = D();
    return /* @__PURE__ */ a(C2, { config: { network: T2 }, children: /* @__PURE__ */ a(
      u2,
      {
        canisterId: t.toText(),
        idlFactory: Cn,
        httpAgentOptions: { host: Y ? "http://127.0.0.1:4943" : "https://icp0.io" },
        children: n ? /* @__PURE__ */ a(Ma, { children: e }) : /* @__PURE__ */ a(x, { children: e })
      }
    ) });
  },
  (e, t) => e.siwbProviderCanisterId.compareTo(t.siwbProviderCanisterId) === "eq" && e.children === t.children
), Ga = () => ee(In), Ra = h(({ provider: e }) => {
  switch (e.type) {
    case "line":
      return /* @__PURE__ */ a(x, { children: "Line" });
    case "google":
      return /* @__PURE__ */ a(x, { children: "Google" });
    case "apple":
      return /* @__PURE__ */ a(x, { children: "Apple" });
    case "facebook":
      return /* @__PURE__ */ a(x, { children: "Facebook" });
    case "twitter":
      return /* @__PURE__ */ a(x, { children: "X" });
    case "internet_identity":
      return /* @__PURE__ */ a(x, { children: "Internet Identity" });
    case "github":
      return /* @__PURE__ */ a(x, { children: "GitHub" });
    case "email_passwordless":
      return /* @__PURE__ */ a(x, { children: "Email" });
    case "siwb":
      return /* @__PURE__ */ a(x, { children: Gt[e.provider].label });
  }
});
export {
  St as AddTokenModal,
  Tr as AllowanceComponent,
  xa as AllowanceManagementProvider,
  vn as AuthClientContext,
  vr as BTC_DECIMALS,
  x0 as BTC_LEDGER_CANISTER_ID,
  b0 as BTC_MINTER_CANISTER_ID,
  Ht as BigIntTimestampToDate,
  E0 as CKERC20_TO_ERC20_MAX_TRANSACTION_FEE,
  wr as CKTokenCurrencyComponent,
  hr as CKTokenSymbolLabelComponent,
  jt as CKTokenSymbolSerializer,
  V2 as CKTokenToString,
  d0 as CURRENCY_NETWORKS,
  Wn as ChainFusionContext,
  Mn as CurrencyAllowanceContext,
  J as CurrencyComponent,
  o0 as CurrencyComponentInner,
  r0 as CurrencyIconComponent,
  Dt as CurrencyInputComponent,
  Nt as CurrencyMetaIconComponent,
  T as CurrencySerializer,
  ve as CurrencyToString,
  Ce as CurrencyTypeComponent,
  Me as CurrencyTypeIconComponent,
  xr as CurrencyTypeInputComponent,
  c0 as CurrencyTypeLabelComponent,
  K as CurrencyTypeSerializer,
  I as CurrencyTypeSymbolComponent,
  pe as CurrencyTypeToString,
  fr as DateToBigIntTimestamp,
  _2 as DateToBigNanoseconds,
  mr as DateToLocalDateTimeString,
  H2 as EI6963Provider,
  Tn as EIP6963ProviderContext,
  kr as ETHExternalWalletTypes,
  Jn as ETH_DECIMALS,
  Rn as ETH_LEDGER_CANISTER_ID,
  B0 as ETH_MINTER_CANISTER_ID,
  pr as FloatToTokenAmount,
  gr as GenericICRC1IconComponent,
  yr as GenericICRC1LabelComponent,
  R2 as IIHost,
  zn as IsSameCKTokenSymbol,
  kn as IsSameCurrency,
  On as IsSameCurrencyType,
  e0 as IsSamePrincipal,
  xn as IsSameToken,
  Ra as LoginProviderLabel,
  En as ManualWalletContext,
  Or as ManualWalletSelectorComponent,
  I0 as ProvideAuthClient,
  G0 as ProvideChainFusionContext,
  _0 as ProvideCurrencyConfig,
  Pr as ProvideCurrencyContext,
  Na as ProvideManualWalletContext,
  ra as ProvideTokenRegistry,
  S as Queries,
  zr as RealCurrencyInputComponent,
  Nr as ReceiverComponent,
  Aa as ReceiverSelectorComponent,
  K0 as SignupModalContentComponent,
  ht as SocialLoginProviders,
  D2 as TokenAmountToBig,
  Ae as TokenAmountToString,
  Vt as TokenSerializer,
  h0 as USDC_DECIMALS,
  y0 as USDC_LEDGER_CANISTER_ID,
  g0 as USDC_MINTER_CANISTER_ID,
  T0 as USDT_DECIMALS,
  C0 as USDT_LEDGER_CANISTER_ID,
  v0 as USDT_MINTER_CANISTER_ID,
  Kn as WalletDisplayComponent,
  Er as WalletModalContent,
  Un as WalletModalContentContext,
  Bt as WalletTypeLabel,
  Xn as WalletTypes,
  ke as buildCKTokenManager,
  Ct as buildChainFusionActor,
  Xe as buildCurrencyManager,
  w0 as buildCurrencyTypeManager,
  Ue as buildFakeCurrencyManager,
  m0 as buildICPManager,
  vt as buildICRC1CurrencyManager,
  Ot as decodeSymbolFrom8Bytes,
  Ft as encodeSymbolTo8Bytes,
  bn as fetchAllowance,
  dr as formatBalance,
  Tt as getChainFusionTransactionFee,
  z0 as getERC20CanisterData,
  ea as getIsBTC,
  Gn as getStaticManagerMetadata,
  je as host,
  ur as secondsToLabel,
  $2 as setAllowance,
  Ar as toWeiHex,
  Nn as transferTo,
  Vn as useAllowance,
  Hn as useAllowanceBalance,
  W as useAuth,
  fe as useBalance,
  Pt as useChainFusion,
  Fn as useChainFusionActor,
  Kt as useChainFusionAllowance,
  P0 as useChainFusionTransactionFees,
  De as useCurrencyConfig,
  n0 as useCurrencyManager,
  ue as useCurrencyManagerMeta,
  Ke as useEIP6963,
  $0 as useEnabledNetworks,
  D as useIsBTC,
  Yn as useIsChainFusionCurrency,
  Et as useManualWallet,
  Pn as useManualWalletTransfer,
  D0 as useRequireBalance,
  a0 as useRequiredCurrencyManager,
  Zn as useSearchCurrencies,
  Br as useSelectedCurrency,
  O0 as useSetAllowance,
  br as useSetSelectedCurrency,
  Se as useShowingNativeCurrency,
  _e as useTokenRegistry,
  Le as useTransactionFee,
  Cr as useTransfer,
  Ge as useWalletModalContentContext,
  ge as web3auth
};
