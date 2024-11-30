import * as _google_cloud_storage from '@google-cloud/storage';
import { Storage } from '@google-cloud/storage';
import * as firebase_admin_database from 'firebase-admin/database';
import { getAuth } from 'firebase-admin/auth';
export { getAuth } from 'firebase-admin/auth';
import { FieldValue } from 'firebase-admin/firestore';
export { FieldValue } from 'firebase-admin/firestore';
import { getDownloadURL } from 'firebase-admin/storage';
export { getDownloadURL } from 'firebase-admin/storage';
import * as _google_analytics_data_build_src_v1beta from '@google-analytics/data/build/src/v1beta';

declare const database: firebase_admin_database.Database;
declare const firestore: FirebaseFirestore.Firestore;
declare const bucket: _google_cloud_storage.Bucket;

declare class FBService {
    db: FirebaseFirestore.Firestore;
    database: firebase_admin_database.Database;
    bucket: _google_cloud_storage.Bucket;
    getAuth: typeof getAuth;
    getDownloadURL: typeof getDownloadURL;
    FieldValue: typeof FieldValue;
    private static instance;
    constructor();
    getCollection: (collection: string, doc?: string) => FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData> | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>;
    getData: <T>(collection: string, doc?: string) => Promise<T>;
    setData: (data: any, collection: string, docId?: string) => Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData> | FirebaseFirestore.WriteResult>;
    mergeData: (data: any, collection: string, docId: string) => Promise<FirebaseFirestore.WriteResult>;
    getSubCollection: (collection: string, doc: string, subCollection: string, subDoc?: string) => FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData> | FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>;
    getSubCollectionData: <T>(collection: string, doc: string, subCollection: string, subDoc?: string) => Promise<T>;
    setSubCollectionData: (data: any, collection: string, doc: string, subCollection: string, subDoc?: string) => Promise<FirebaseFirestore.DocumentReference<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData> | FirebaseFirestore.WriteResult>;
}

declare enum GCSBucketName {
    STOCKLIFT_TEST_BUCKET = "stocklift_test_bucket",
    SL_PUBLIC_BUCKET = "sl_public_bucket",
    SL_PROD_PUBLIC_BUCKET = "sl_prod_public_bucket"
}

declare class GSCService {
    account: {
        project_id: string | undefined;
        private_key: string | undefined;
        client_email: string | undefined;
    };
    propertyId: string;
    storage: Storage;
    analyticsDataClient: _google_analytics_data_build_src_v1beta.BetaAnalyticsDataClient;
    private static instance;
    constructor();
}

declare const enum FBKeys {
    app = "app",
    admin = "admin",
    advisors = "advisors",
    advisor_register = "advisor_register",
    advice_market = "advice_market",
    asset_data = "asset_data",
    contest_analytics = "contest_analytics",
    market_questions = "market_questions",
    "all.symbols" = "all.symbols",
    comments = "comments",
    competition = "competition",
    contest = "contest",
    deactivated = "deactivated",
    "error-logs" = "error-logs",
    etfs = "etfs",
    followers = "followers",
    following = "following",
    fidelity_issues = "fidelity_issues",
    advice_market_promo = "advice_market_promo",
    "linked-accounts" = "linked-accounts",
    linkedin = "linkedin",
    logos = "logos",
    logs = "logs",
    market = "market",
    market_reviews = "market_reviews",
    "market-state" = "market-state",
    messages = "messages",
    "mutual-funds" = "mutual-funds",
    networth = "networth",
    newsfeed = "newsfeed",
    "not-verified" = "not-verified",
    notifications = "notifications",
    "null-values" = "null-values",
    market_consultation = "market_consultation",
    "plaid-requests" = "plaid-requests",
    "player-id" = "player-id",
    "post-likes" = "post-likes",
    purchase = "purchase",
    portfolio = "portfolio",
    requests = "requests",
    "sector-weights" = "sector-weights",
    simulator = "simulator",
    "simulator-results" = "simulator-results",
    "simulator-net" = "simulator-net",
    "simulator-logs" = "simulator-logs",
    stripe_accnt = "stripe_accnt",
    "top-holdings" = "top-holdings",
    users = "users",
    verified = "verified",
    watchlist = "watchlist",
    post_views = "post_views",
    scheduled_notifications = "scheduled_notifications",
    market_financialPlans = "market_financialPlans",
    newsfeed_yhnews = "newsfeed_yhnews",
    newsfeed_congressTrades = "newsfeed_congressTrades",
    profit_picks_choices = "profit_picks_choices",
    profit_picks = "profit_picks",
    profit_picks_has_won = "profit_picks_has_won"
}
declare const enum FBSubKeys {
    accounts = "accounts",
    newsfeed_comments = "newsfeed-comments",
    user_networth = "user-networth",
    "user-notifications" = "user-notifications",
    cost_basis = "cost_basis",
    "cost-basis" = "cost-basis",
    contest_results = "contest_results",
    contest = "contest",
    simulator = "simulator",
    million = "million",
    DJI = "DJI",
    linked_accounts = "linked_accounts",
    error_catch = "error-catch",
    request = "request",
    schedules = "schedules",
    user_error = "user-error",
    user_following = "user-following",
    user_followers = "user-followers",
    portfolio_error = "portfolio_error",
    "user-watchlist" = "user-watchlist",
    "top-ten" = "top-ten",
    analytics_error = "analytics-error",
    watchlist_error = "watchlist-error",
    worker_error = "worker-error",
    top_movers_error = "top-movers-error",
    networth_error = "networth-error",
    portf_chart_error = "portfolio-chart-error",
    delete_token_error = "delete_token_error",
    stripe_purchase = "stripe_purchase",
    unread = "unread",
    requests = "requests",
    version = "version",
    profit_pick_winners = "profit_pick_winners",
    profit_pick_losers = "profit_pick_losers",
    profit_picks_has_won = "profit_picks_has_won"
}
declare const enum ERRKeys {
    comb_net_error = "comb_net_error",
    notifification_error = "notifification_error",
    sim_start_error = "sim_start_error",
    close_price_error = "close_price_error",
    plaid_error = "plaid_error",
    websocket_error = "websocket_error",
    update_app_error = "update_app_error",
    newsfeed_error = "newsfeed_error",
    advisor_error = "advisor_error",
    register_error = "register_error",
    advice_market_err = "advice_market_err",
    stripe_err = "stripe_err",
    social_error = "social_error",
    webhook_err = "webhook_err"
}

export { ERRKeys, FBKeys, FBService, FBSubKeys, GCSBucketName, GSCService, bucket, database, firestore };
