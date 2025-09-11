import { AccountIdentifier } from '@dfinity/ledger-icp';
import { Allowance } from '@dfinity/ledger-icrc/dist/candid/icrc_ledger';
import { AuthClient } from '@dfinity/auth-client';
import { AuthUserInfo } from '@web3auth/auth-adapter';
import { Context } from 'react';
import { default as default_2 } from 'react';
import { default as default_3 } from 'big.js';
import { DefinedUseQueryResult } from '@tanstack/react-query';
import { HttpAgent } from '@dfinity/agent';
import { IcrcTokenMetadata } from '@dfinity/ledger-icrc';
import { Identity } from '@dfinity/agent';
import { IProvider } from '@web3auth/base';
import { JSX } from 'react/jsx-runtime';
import { LaserEyesContextType } from '@omnisat/lasereyes';
import { MemoExoticComponent } from 'react';
import { NamedExoticComponent } from 'react';
import { NumberInputValue } from '@zk-game-dao/ui';
import { Principal } from '@dfinity/principal';
import { PropsWithChildren } from 'react';
import { QueryKeyFactory } from '@zk-game-dao/ui';
import { ReactNode } from 'react';
import { SiwbIdentityContextType } from 'ic-siwb-lasereyes-connector';
import { UseMutationResult } from '@tanstack/react-query/build/legacy/types';
import { UseMutationResult as UseMutationResult_2 } from '@tanstack/react-query';
import { Web3AuthNoModal } from '@web3auth/no-modal';

export declare const AddTokenModal: NamedExoticComponent<    {
onClose(): void;
isOpen?: boolean;
onSelect?(currency: Currency): void;
}>;

export declare type AllowanceAddressData = {
    currencyType: CurrencyType;
    receiver: CurrencyReceiver;
    name: ReactNode;
};

export declare const AllowanceComponent: NamedExoticComponent<AllowanceAddressData>;

export declare type AllowanceContextType = {
    setAllowance: (address: AllowanceAddressData, request: AllowanceRequestData, expires_at: Date) => Promise<void>;
    requireAllowance: (address: AllowanceAddressData, request: AllowanceRequestData, 
    /** This will be used if a new expiration has to be used */
    expires_at: Date) => Promise<void>;
};

export declare const AllowanceManagementProvider: MemoExoticComponent<({ children }: {
children: ReactNode;
}) => JSX.Element>;

export declare type AllowanceRequestData = {
    amount: bigint;
    reason: ReactNode;
};

export declare const AuthClientContext: Context<AuthClientContextData>;

export declare type AuthClientContextData = {
    authData?: AuthData;
    error?: Error;
    isLoggingIn?: boolean;
    login(loginProvider: Web3AuthLoginProvider): Promise<void>;
    loginFactory(loginProvider: Web3AuthLoginProvider): () => Promise<void>;
    logout(): Promise<void>;
    requireLogin(): Promise<AuthData>;
};

export declare type AuthData = (AuthDataInternetIdentity | AuthDataWeb3Auth | AuthDataSiwb) & {
    agent: HttpAgent;
    identity: Identity;
    principal: Principal;
    accountIdentifier: AccountIdentifier;
};

export declare type AuthDataInternetIdentity = AuthDataProvider<"internet_identity", {
    type: "internet_identity";
}>;

declare type AuthDataProvider<T, Provider, Extra = unknown> = {
    type: T;
    provider: Provider;
} & Extra;

export declare type AuthDataSiwb = AuthDataProvider<"siwb", {
    type: "siwb";
    provider: SupportedSIWBProvider;
}>;

export declare type AuthDataWeb3Auth = AuthDataProvider<"web3auth", Web3AuthLoginProvider, {
    userInfo: Partial<AuthUserInfo>;
}>;

export declare type AuthProvider = AuthData["provider"];

export declare const BigIntTimestampToDate: (timestamp: bigint) => Date;

export declare const BTC_DECIMALS = 8;

export declare const BTC_LEDGER_CANISTER_ID = "mxzaz-hqaaa-aaaar-qaada-cai";

export declare const BTC_MINTER_CANISTER_ID = "mqygn-kiaaa-aaaar-qaadq-cai";

export declare const buildChainFusionActor: (currency: Currency, selectedWallet: EIP6963ProviderDetail | null, selectedAccount: string | null, authData?: AuthData) => {
    withdraw(amount: bigint): Promise<unknown>;
    deposit(amount: bigint): Promise<unknown>;
    setAllowanceTo(allowance: bigint): Promise<bigint>;
    fetchAllowance(): Promise<Allowance>;
};

export declare const buildCKTokenManager: (agent: HttpAgent, ckTokenSymbol: CKTokenSymbol) => Promise<CurrencyManager>;

export declare const buildCurrencyManager: (agent: HttpAgent, currency: Currency) => Promise<CurrencyManager>;

export declare const buildCurrencyTypeManager: (agent: HttpAgent, currencyType: CurrencyType) => Promise<CurrencyManager>;

export declare const buildFakeCurrencyManager: (isBTC: boolean) => CurrencyManager;

export declare const buildICPManager: (agent: HttpAgent) => Promise<CurrencyManager>;

export declare const buildICRC1CurrencyManager: (agent: HttpAgent, currency: Currency) => Promise<CurrencyManager>;

export declare const ChainFusionContext: Context<ChainFusionContextValue>;

declare type ChainFusionContextValue = {
    /** Whether the ui should show the native currencies or not */
    isNativeShown: boolean;
    setIsNativeShown(show: boolean): void;
    depostTransactionsHashes: TransactionHashMap;
    withdrawalTransactionsHashes: TransactionHashMap;
    deposit(currency: Currency, amount: bigint): Promise<void>;
    withdraw(currency: Currency, amount: bigint): Promise<void>;
};

export declare type ChainFusionTransferProps = {
    currency: Currency;
    amount: bigint;
};

export declare const CKERC20_TO_ERC20_MAX_TRANSACTION_FEE = 10000000000000000n;

export declare const CKTokenCurrencyComponent: NamedExoticComponent<    {
className?: string;
ckToken: CKTokenSymbol;
}>;

export declare type CKTokenSymbol = {
    ETH: null;
} | {
    USDC: null;
} | {
    USDT: null;
};

export declare const CKTokenSymbolLabelComponent: NamedExoticComponent<    {
value: CKTokenSymbol;
}>;

export declare const CKTokenSymbolSerializer: {
    serialize: (value: CKTokenSymbol) => string;
    deserialize: (value: string) => CKTokenSymbol;
    validate: (value: CKTokenSymbol) => CKTokenSymbol;
};

export declare const CKTokenToString: (ckTokenSymbol: CKTokenSymbol) => string;

export declare type CryptoCoinValue = {
    currencyValue?: bigint;
    currencyType: CurrencyType;
};

export declare type Currency = {
    BTC: null;
} | {
    ICP: null;
} | {
    GenericICRC1: Token;
} | {
    CKETHToken: CKTokenSymbol;
};

export declare const CURRENCY_NETWORKS: readonly ["ic", "btc", "eth"];

export declare const CurrencyAllowanceContext: Context<AllowanceContextType>;

export declare const CurrencyComponent: NamedExoticComponent<CurrencyComponentProps>;

export declare const CurrencyComponentInner: NamedExoticComponent<CryptoCoinValue & {
className?: string;
size?: "medium" | "big" | "small";
hideSymbol?: boolean;
reverse?: boolean;
forceFlex?: boolean;
} & Pick<CurrencyMeta, "symbol" | "decimals" | "renderedDecimalPlaces" | "icon" | "isFetched">>;

export declare type CurrencyComponentInnerProps = CryptoCoinValue & {
    className?: string;
    size?: "medium" | "big" | "small";
    hideSymbol?: boolean;
    reverse?: boolean;
    forceFlex?: boolean;
};

export declare type CurrencyComponentProps = CurrencyComponentInnerProps & {
    variant?: "inline" | "chip";
    forceFlex?: boolean;
};

export declare type CurrencyConfigContextType = {
    enabledNetworks: CurrencyNetwork[];
    selectedCurrency: Currency;
    setSelectedCurrency(currency: Currency): void;
    isBTC: boolean;
};

export declare const CurrencyIconComponent: NamedExoticComponent<    {
className?: string;
currency: Currency;
}>;

export declare const CurrencyInputComponent: NamedExoticComponent<CurrencyInputProps>;

export declare type CurrencyInputProps = Omit<NumberInputValue, 'minQuickAction' | 'maxQuickAction' | 'step' | 'maxDecimals' | 'symbol' | 'defaultValue' | 'min' | 'max'> & {
    currencyType: CurrencyType;
    onChange?(value: bigint): void;
    value?: bigint;
    defaultValue?: bigint;
    min?: bigint;
    max?: bigint;
    className?: string;
    hideMinQuickAction?: boolean;
    hideMaxQuickAction?: boolean;
};

export declare type CurrencyManager = {
    meta: CurrencyMeta;
    currencyType: CurrencyType;
};

export declare type CurrencyManagerMap = Record<string, CurrencyManager>;

export declare type CurrencyMeta = {
    decimals: number;
    /** the decimals to the power of 10 (8 decimals becomes 1000000000) */
    thousands: number;
    transactionFee: bigint;
    /** For expensive currencies, this forces a certain amount of decimals being rendered (BTC should show 6 for example) */
    renderedDecimalPlaces?: number;
    metadata?: IcrcTokenMetadata;
    /** Base64 encoded icon */
    icon?: string;
    /** The name of the currency */
    symbol: string;
    /** Marks if this data is fetched from the ledgers metadata */
    isFetched: boolean;
    /** Like satoshis for btc */
    alternatives?: Record<string, CurrencyMeta>;
};

export declare const CurrencyMetaIconComponent: NamedExoticComponent<    {
className?: string;
meta: Pick<CurrencyMeta, "isFetched" | "icon" | "symbol"> & {
metadata?: Pick<IcrcTokenMetadata, "name">;
};
}>;

export declare type CurrencyNetwork = (typeof CURRENCY_NETWORKS)[number];

export declare type CurrencyReceiver = {
    accountIdentifier: AccountIdentifier;
} | {
    principal: Principal;
};

export declare const CurrencySerializer: {
    serialize: (value: Currency) => string;
    deserialize: (value: string) => Currency;
    validate: (value: Currency) => Currency;
};

export declare const CurrencyToString: (currency: Currency) => string;

export declare type CurrencyType = {
    Fake: null;
} | {
    Real: Currency;
};

export declare const CurrencyTypeComponent: NamedExoticComponent<    {
currencyType: CurrencyType;
}>;

export declare const CurrencyTypeIconComponent: NamedExoticComponent<    {
className?: string;
currencyType: CurrencyType;
}>;

export declare const CurrencyTypeInputComponent: NamedExoticComponent<    {
label?: ReactNode;
value?: CurrencyType;
onChange(value?: CurrencyType): void;
}>;

export declare const CurrencyTypeLabelComponent: NamedExoticComponent<    {
currencyType: CurrencyType;
}>;

export declare const CurrencyTypeSerializer: {
    serialize: (value: CurrencyType) => string;
    deserialize: (value: string) => CurrencyType;
    validate: (value: CurrencyType) => CurrencyType;
};

export declare const CurrencyTypeSymbolComponent: NamedExoticComponent<    {
currencyType: CurrencyType;
}>;

export declare const CurrencyTypeToString: (currencyType: CurrencyType) => string;

export declare const DateToBigIntTimestamp: (date: Date) => bigint;

export declare const DateToBigNanoseconds: (date: Date) => bigint;

export declare const DateToLocalDateTimeString: (timestamp: bigint, format?: string) => string;

/**
 * Decode an 8-byte Uint8Array back into a string,
 * stopping at the first 0 byte (like Rust's null-terminating logic).
 */
export declare function decodeSymbolFrom8Bytes(bytes: Uint8Array | number[]): string;

export declare const EI6963Provider: NamedExoticComponent<    {
children?: ReactNode | undefined;
}>;

export declare interface EIP1193Provider {
    isStatus?: boolean;
    host?: string;
    path?: string;
    sendAsync?: (request: {
        method: string;
        params?: Array<unknown>;
    }, callback: (error: Error | null, response: unknown) => void) => void;
    send?: (request: {
        method: string;
        params?: Array<unknown>;
    }, callback: (error: Error | null, response: unknown) => void) => void;
    request: (request: {
        method: "eth_sendTransaction" | "eth_requestAccounts" | "eth_getTransactionCount" | "wallet_revokePermissions";
        params?: Array<unknown>;
    }) => Promise<unknown>;
}

export declare type EIP6963AnnounceProviderEvent = {
    detail: {
        info: EIP6963ProviderInfo;
        provider: Readonly<EIP1193Provider>;
    };
};

export declare const EIP6963ProviderContext: Context<WalletProviderContext>;

export declare interface EIP6963ProviderDetail {
    info: EIP6963ProviderInfo;
    provider: EIP1193Provider;
}

export declare interface EIP6963ProviderInfo {
    rdns: string;
    uuid: string;
    name: string;
    icon: string;
}

/**
 * Encode a string into an 8-byte Uint8Array (like the Rust [u8; 8]).
 * - Copies up to the first 8 bytes of the string.
 * - Any remaining positions are filled with 0.
 */
export declare function encodeSymbolTo8Bytes(symbol: string): Uint8Array;

export declare const ETH_DECIMALS = 18;

export declare const ETH_LEDGER_CANISTER_ID = "ss2fx-dyaaa-aaaar-qacoq-cai";

export declare const ETH_MINTER_CANISTER_ID = "sv3dd-oaaaa-aaaar-qacoa-cai";

export declare type ETHExternalWalletType = (typeof ETHExternalWalletTypes)[number];

export declare const ETHExternalWalletTypes: string[];

export declare const fetchAllowance: (currencyType: CurrencyType, receiver: CurrencyReceiver, authData: AuthData) => Promise<bigint>;

export declare const FloatToTokenAmount: <Param extends default_3 | undefined = default_3.Big | undefined, Return = Param extends number ? bigint : undefined>(f: Param, meta: CurrencyMeta) => Return;

export declare const formatBalance: (rawBalance: string) => string;

export declare type FullAllowanceRequestData = {
    address: AllowanceAddressData;
    request: AllowanceRequestData;
};

export declare const GenericICRC1IconComponent: NamedExoticComponent<    {
className?: string;
token: Token;
}>;

export declare const GenericICRC1LabelComponent: NamedExoticComponent<    {
value: Token;
}>;

export declare const getChainFusionTransactionFee: (authData: AuthData) => Promise<{
    ckERC20ToERC20: bigint;
    ckETHToETH: bigint;
}>;

export declare const getERC20CanisterData: (ckTokenSymbol: CKTokenSymbol) => {
    minter: Principal;
    ledger: Principal;
    tokenContractAddress: string;
    decimals: number;
};

export declare const getIsBTC: (enabledNetworks: CurrencyNetwork[]) => boolean;

/** All the static metadata info that can be extracted */
export declare const getStaticManagerMetadata: (currency: Currency, metadata?: IcrcTokenMetadata, isFetched?: boolean) => CurrencyMeta;

export declare const host: any;

export declare const IIHost: string;

export declare const IsSameCKTokenSymbol: (a?: CKTokenSymbol, b?: CKTokenSymbol) => boolean;

export declare const IsSameCurrency: (a?: Currency, b?: Currency) => boolean;

export declare const IsSameCurrencyType: (a?: CurrencyType, b?: CurrencyType) => boolean;

export declare const IsSamePrincipal: (a?: Principal, b?: Principal) => boolean;

export declare const IsSameToken: (a?: Token, b?: Token) => boolean;

export declare const LoginProviderLabel: NamedExoticComponent<    {
provider: AuthProvider;
}>;

export declare const ManualWalletContext: Context<ManualWalletContextType>;

declare type ManualWalletContextType = {
    walletType?: WalletType;
    setWalletType(v: WalletType): void;
};

export declare const ManualWalletSelectorComponent: NamedExoticComponent<    {
label?: ReactNode;
}>;

export declare type ModalProps = {
    onBack(): void;
    requiredBalance?: CryptoCoinValue;
    label?: ReactNode;
    onSubmit?(newBalance: bigint): void;
};

export declare const ProvideAuthClient: NamedExoticComponent<    {
children?: ReactNode | undefined;
}>;

export declare const ProvideChainFusionContext: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare const ProvideCurrencyConfig: NamedExoticComponent<PropsWithChildren<{
enabledNetworks?: CurrencyNetwork[];
disabledNetworks?: CurrencyNetwork[];
}>>;

export declare const ProvideCurrencyContext: NamedExoticComponent<    {
children: ReactNode;
disabledNetworks?: CurrencyNetwork[];
enabledNetworks?: CurrencyNetwork[];
/** If left empty its going to use the production canister */
siwbProviderCanisterId?: Principal;
}>;

export declare const ProvideManualWalletContext: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare type Providers = Partial<{
    web3AuthProvider: IProvider;
    internetIdentityProvider: AuthClient;
}>;

export declare const ProvideTokenRegistry: NamedExoticComponent<    {
children: ReactNode;
}>;

export declare const Queries: {
    auth: QueryKeyFactory<[{
    siwb?: SiwbIdentityContextType;
    laserEyes?: LaserEyesContextType;
    internetIdentityProvider?: AuthClient;
    }], any[]>;
    _balanceModalBalance: QueryKeyFactory<[currency: CurrencyType], (string | CurrencyType)[]>;
    chain_fusion_transaction_fees: QueryKeyFactory<[authenticated: boolean], string[]>;
    walletBalance: QueryKeyFactory<[currency: CurrencyType, authData?: {
    accountIdentifier?: AccountIdentifier;
    } | undefined], (string | CurrencyType)[]>;
    icrc_allowance: QueryKeyFactory<[currency: CurrencyType], (string | CurrencyType)[]>;
    allowance: QueryKeyFactory<[currency?: CurrencyType | undefined, receiver?: CurrencyReceiver | undefined, wallet?: Principal | undefined], (string | CurrencyType)[]>;
    transactionFee: QueryKeyFactory<[currency: CurrencyType], (string | CurrencyType)[]>;
};

export declare const RealCurrencyInputComponent: NamedExoticComponent<    {
label?: ReactNode;
value?: Currency;
onChange(value?: Currency): void;
}>;

export declare const ReceiverComponent: default_2.NamedExoticComponent<{
    receiver: CurrencyReceiver;
}>;

export declare const ReceiverSelectorComponent: NamedExoticComponent<    {
currency: Currency;
}>;

export declare const secondsToLabel: (seconds: number) => string;

export declare const setAllowance: (currencyType: CurrencyType, receiver: CurrencyReceiver, amount: bigint, authData: AuthData, expires_at: Date) => Promise<bigint>;

export declare const SignupModalContentComponent: NamedExoticComponent<    {
onClose(): void;
}>;

export declare type SocialLoginProviderKey = (typeof SocialLoginProviders)[number];

export declare const SocialLoginProviders: readonly ["google", "line", "twitter", "internet_identity", "apple", "facebook", "github"];

declare const SUPPORTED_WALLETS: readonly ["unisat", "xverse", "okx", "wizz", "leather", "magic-eden", "oyl"];

declare type SupportedSIWBProvider = (typeof SUPPORTED_WALLETS)[number];

export declare interface Token {
    decimals: number;
    ledger_id: Principal;
    symbol: Uint8Array | number[];
}

export declare const TokenAmountToBig: <Param extends bigint | undefined = bigint | undefined, Return = Param extends bigint ? default_3.Big : undefined>(amount: Param, meta: CurrencyMeta) => Return;

export declare const TokenAmountToString: (amount: bigint, meta: Pick<CurrencyMeta, "decimals" | "renderedDecimalPlaces">, forceAccuracy?: boolean) => string;

export declare type TokenRegistry = {
    highlightedCurrencies: Currency[];
    allCurrencies: Currency[];
    addCurrency: (currency: Currency) => void;
    removeCurrency: (currency: Currency) => void;
};

export declare const TokenSerializer: {
    serialize: (value: Token) => string;
    deserialize: (value: string) => Token;
    validate: (value: Token) => Token;
};

export declare const toWeiHex: (amount: number) => string;

export declare type TransactionHashMap = Partial<Record<string, string[]>>;

export declare const transferTo: (currencyType: CurrencyType, receiver: CurrencyReceiver, amount: bigint, authData: AuthData) => Promise<bigint>;

export declare const USDC_DECIMALS = 6;

export declare const USDC_LEDGER_CANISTER_ID = "xevnm-gaaaa-aaaar-qafnq-cai";

export declare const USDC_MINTER_CANISTER_ID = "sv3dd-oaaaa-aaaar-qacoa-cai";

export declare const USDT_DECIMALS = 6;

export declare const USDT_LEDGER_CANISTER_ID = "cngnf-vqaaa-aaaar-qag4q-cai";

export declare const USDT_MINTER_CANISTER_ID = "sv3dd-oaaaa-aaaar-qacoa-cai";

export declare const useAllowance: (address?: AllowanceAddressData) => {
    allowance: bigint;
    require(request: AllowanceRequestData, expires_at: Date): Promise<void>;
    update(request: AllowanceRequestData, expires_at: Date): Promise<void>;
};

export declare const useAllowanceBalance: (address?: AllowanceAddressData) => bigint;

export declare const useAuth: () => AuthClientContextData;

export declare const useBalance: (currencyType: CurrencyType) => bigint;

export declare const useChainFusion: () => ChainFusionContextValue;

export declare const useChainFusionActor: (currency: Currency) => {
    withdraw(amount: bigint): Promise<unknown>;
    deposit(amount: bigint): Promise<unknown>;
    setAllowanceTo(allowance: bigint): Promise<bigint>;
    fetchAllowance(): Promise<Allowance>;
};

export declare const useChainFusionAllowance: (currency: Currency) => Allowance | undefined;

export declare const useChainFusionTransactionFees: () => {
    ckERC20ToERC20: bigint;
    ckETHToETH: bigint;
} | undefined;

export declare const useCurrencyConfig: () => CurrencyConfigContextType;

export declare const useCurrencyManager: (currencyType: CurrencyType) => CurrencyManager;

export declare const useCurrencyManagerMeta: (currencyType: CurrencyType) => CurrencyMeta;

export declare const useEIP6963: () => WalletProviderContext;

export declare const useEnabledNetworks: () => ("ic" | "btc" | "eth")[];

export declare const useIsBTC: () => boolean;

export declare const useIsChainFusionCurrency: (currency: Currency) => boolean;

export declare const useManualWallet: () => ManualWalletContextType;

export declare const useManualWalletTransfer: (currencyType: CurrencyType, to?: Principal, action?: string) => UseMutationResult_2<bigint, Error, bigint, unknown>;

export declare const useRequireBalance: (currency: CurrencyType) => (requiredBalance: bigint, action?: string) => Promise<void>;

export declare const useRequiredCurrencyManager: (currencyType: CurrencyType) => CurrencyManager;

export declare const useSearchCurrencies: (query?: string) => DefinedUseQueryResult<Currency[], Error>;

export declare const useSelectedCurrency: () => Currency;

export declare const useSetAllowance: (currency: Currency) => (allowance: bigint) => Promise<bigint>;

export declare const useSetSelectedCurrency: () => (currency: Currency) => void;

export declare const useShowingNativeCurrency: (currency: Currency) => boolean;

export declare const useTokenRegistry: () => TokenRegistry;

export declare const useTransactionFee: (currencyType: CurrencyType) => bigint;

export declare const useTransfer: (currency: Currency, to?: CurrencyReceiver) => UseMutationResult_2<bigint, Error, bigint, unknown>;

export declare const useWalletModalContentContext: () => WalletModalContentContextType;

export declare const WalletDisplayComponent: NamedExoticComponent<    {
currency: Currency;
}>;

export declare interface WalletError {
    code?: string;
    message?: string;
}

export declare const WalletModalContent: NamedExoticComponent<ModalProps>;

export declare const WalletModalContentContext: Context<WalletModalContentContextType>;

export declare type WalletModalContentContextType = {
    deposit: UseMutationResult<void, Error, void, unknown>;
    withdraw: UseMutationResult<void, Error, void, unknown>;
    continueMutation: UseMutationResult<void, Error, void, unknown>;
    currency?: Currency;
    authData: AuthData;
    web3WalletType: WalletType | "external";
    setWeb3WalletType(walletType: WalletType | "external"): void;
    web3WithdrawExternalWalletAddress: string;
    setWeb3WithdrawExternalWalletAddress(address: string): void;
    mode: WalletModalMode;
    setMode(mode: WalletModalMode): void;
    amount: bigint;
    setAmount(amount: bigint): void;
} & Pick<ModalProps, "requiredBalance">;

export declare type WalletModalMode = "withdraw" | "deposit";

export declare interface WalletProviderContext {
    wallets: Record<string, EIP6963ProviderDetail>;
    selectedWallet: EIP6963ProviderDetail | null;
    selectedAccount: string | null;
    errorMessage: string | null;
    connectWallet: (walletUuid: string) => Promise<void>;
    disconnectWallet: () => void;
    clearError: () => void;
}

export declare type WalletType = (typeof WalletTypes)[number];

export declare const WalletTypeLabel: NamedExoticComponent<    {
walletType?: WalletType | ETHExternalWalletType;
eip6963?: EIP6963ProviderInfo;
}>;

export declare const WalletTypes: readonly ["plug", "bitfinityWallet"];

export declare const web3auth: Web3AuthNoModal;

export declare type Web3AuthLoginProvider = {
    type: SocialLoginProviderKey;
} | {
    type: "email_passwordless";
    email: string;
};

export { }


declare global {
    interface Window {
        ic: {
            [key in WalletType]: Wallet;
        };
        phantom?: {
            solana?: {
                isPhantom: boolean;
                connect: () => Promise<void>;
            };
        };
    }
}


declare global {
    interface WindowEventMap {
        "eip6963:announceProvider": CustomEvent;
    }
}
