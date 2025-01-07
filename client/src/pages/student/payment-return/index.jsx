import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { captureAndFinalizePaymentService } from "@/services";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PaypalPaymentReturnPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const paymentId = params.get("paymentId");
  const payerId = params.get("PayerID");

  useEffect(() => {
    if (paymentId && payerId) {
      async function capturePayment() {
        const currentOrderId = JSON.parse(
          sessionStorage.getItem("currentOrderId")
        );
        const response = await captureAndFinalizePaymentService({
          paymentId,
          payerId,
          orderId: currentOrderId,
        });

        if (response.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/student-courses";
        }
      }
      capturePayment();
    }
  }, [payerId, paymentId]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Processing payment... Please wait</CardTitle>
      </CardHeader>
    </Card>
  );
}
