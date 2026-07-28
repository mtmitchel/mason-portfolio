---
source_document: CAST-Error Codes-270924-155624.pdf
recovered_from: Claude Projects export (acct2)
claude_projects: Error codes
sha256: 60063f367c290a420dd05daac84d1cf5d99d27c180b3947c9158eb1604000818
chars: 5020
tier: B — held, full extracted text
---

Error Codes
The backend team has added detailed error codes to the API as part of DM-1880. In this document you will see a table below with the error
codes that we share as a documentation in the company.
You can also find the detailed error codes in the Swagger documentation.
100 
No checkout session found 
: Unable to retrieve checkout
session for the current account.
NO - too technical
101 
Checkout session has been modified concurrently 
:
Concurrent modifications have been made to the same
session.
NO - too technical
102 
The specified country code does not correspond to a
pro-country 
: The specified country is not recognized as a
pro-country.
YES
103 
The specified country code is unavailable for
checkout 
: The specified pro-country is currently not available
for checkout.
YES
104 
Unknown error 
: Validation failed during confirmation.
Additional data will contain 
SessionError 
.
NO - too technical
105 
Seats are not available 
: The API Packages do not
support a specified number of seats.
YES
106 
Payment processing failed 
: Unable to create subscription
due to unavailability of trial and failure in initial payment
collection.
YES
107 
Invalid billing address 
: Subscription creation failed due
to rejection of billing address by the subscription service.
YES
108 
Invalid email 
: Subscription creation failed due to rejection
of billing address by the subscription service.
YES
109 
Invalid VAT number 
: Subscription creation failed due to
invalid customer's VAT number.
YES
110 
Invalid VAT number 
: Subscription creation failed due to
invalid customer's VAT number.
YES
111 
Invalid billing address validation status. Expected:
[expectedStatus], actual: [actualStatus] 
: The billing
address validation status does not match the expected status.
YES
112 
Invalid or missing address suggestion 
: The suggestion
could not be applied due to being missing or malformed.
NO
Code Description Can we share it with
the end user?
Copywriter comment

113 
[billingPeriod] billing is not available for the
'[packageId]' package 
: The combination of billing period
and package is invalid.
NO
114 
No selected payment method 
: Customer creation in
subscription platform failed due to absence of selected
payment method.
NO
115 
[paymentMethod] is unavailable 
: The selected payment
method is not eligible for the account.
NO
116 
A billing address is missing 
: A billing address must be
provided before performing this operation.
YES
117 
Payment method verification failed 
: Subscription
creation failed due to failure in payment method verification.
YES
118 
Subscription cannot be created due to outstanding
charges 
: Subscription creation failed due to outstanding
charges.
YES
119 
Invalid package ID: '[packageId]' 
: The provided
package ID is invalid (such as 
null 
or empty).
NO - too technical
120 
Unknown error: [fraud prevention code] 
: Fraud
Prevention Total Barrier. DO NOT disclose as fraud prevention
to customer.
?
YES AND NO (see the
comment above)
121 
No package with ID '[packageId]' and '[currency]' 
:
No price available for the given currency and package.
NO
122 
Invalid session state. Expected: [expected], actual:
[actual] 
: The checkout session is in an inconsistent state
and requires a reset.
NO - too technical
123 
Missing setup intent 
: A setup intent must be created by
setting the payment method before executing this operation.
NO - too technical
124 
Missing setup intent details 
: The setup intent is
incomplete.
NO - too technical
125 
Setup intent is not in created state 
: The operation
requires the setup intent to be in the created state.
NO - too technical
126 
Payment processing service failed to handle setup
intent: [message] 
: The setup intent handling failed.
NO - too technical
127 
The selected package [packageId] does not allow more
than [maxSeats] seats 
: The selected number of seats
exceeds the limit for this plan.
YES
128 
Company is missing for the account 
: A company name
and VAT ID must be set before executing this operation.
YES
129 
Account conversion failed due to existing
subscription 
: Legacy Account cannot be migrated due to
existing subscription.
YES

130 
Estimation API Error 
: Different price-related values
configured for properties that must be the same for all billing
periods.
NO - too technical
131 
Estimation API Error 
: No base prices configured for the
selected package in any billing period.
NO - too technical
132 
Estimation API Error 
: Requested prices for the selected
package in a billing period that is not supported.
NO - too technical
133 
Estimation API Error 
: Missing prices in the checkout
session.
NO - too technical
-32003 
AuthenticationFailed 
: Failed Authentication YES
-32004 
AuthorizationFailed 
: Failed Authorization YES
-32029 
TooManyRequests 
: Account has triggered the rate limiting ?
-32602 
InvalidParams 
: Supplied parameters do not match the
method or have invalid values
NO - too technical
-32700 
ParseError 
: Failed to parse request NO - too technical