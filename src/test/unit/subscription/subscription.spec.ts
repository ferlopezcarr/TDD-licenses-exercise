import { assert } from "chai";
import "mocha";
import SubscriptionService from "./susbscription.service";
import SubscriptionMessages from "./utils/subscription-messages";

describe("Subscription Service Unit Tests", () => {
  it("calculateTotalPriceFromSubscriptions when two subscription should return total first range price", () => {
    const subscriptions = 2;
    const total =
      SubscriptionService.getInstance().calculateTotalPriceFromSubscriptions(
        subscriptions
      );
    assert.equal(total, subscriptions * 299);
  });

  it("calculateTotalPriceFromSubscriptions when three subscription should return total second range price", () => {
    const subscriptions = 3;
    const total =
      SubscriptionService.getInstance().calculateTotalPriceFromSubscriptions(
        subscriptions
      );
    assert.equal(total, subscriptions * 239);
  });

  it("calculateTotalPriceFromSubscriptions when infinite subscription should return total last range price", () => {
    const subscriptions = Number.POSITIVE_INFINITY;
    const total =
      SubscriptionService.getInstance().calculateTotalPriceFromSubscriptions(
        subscriptions
      );
    assert.equal(total, subscriptions * 149);
  });

  it("calculateTotalPriceFromSubscriptions when no subscription should return subscriptions invalid error", () => {
    const subscriptions = -1;
    assert.throws(
      () => {
        SubscriptionService.getInstance().calculateTotalPriceFromSubscriptions(
          subscriptions
        );
      },
      Error,
      SubscriptionMessages.ERROR.SUBSCRIPTION_NUMBER.INVALID
    );
  });
});
