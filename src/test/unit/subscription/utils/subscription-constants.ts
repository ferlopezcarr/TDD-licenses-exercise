import SubscriptionTier from "../models/subscription-tier.model";
import subscriptionTiers from "./subscription-tiers.json";

export default class SubscriptionConstants {
  public static readonly SUBSCRIPTION_TIERS: SubscriptionTier[] =
    subscriptionTiers as SubscriptionTier[];
}
