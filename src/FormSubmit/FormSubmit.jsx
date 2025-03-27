import React, { useState } from "react";
import './Form.css'

const FormSubmit = ({ productData }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "d4e98f30-a359-491b-92e4-920cb85a9a91");
    formData.append("product", JSON.stringify(productData)); // Convert JSON to string

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Product Ordered Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form-page">
      <h2>Fill details to order product</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Enter User name</label>
        <input type="text" name="name" placeholder="Your Name" required /><br />
        
        <label htmlFor="email">Enter Email</label>
        <input type="email" name="email" placeholder="Your Email" required /><br />

        {/* Hidden input field with stringified JSON */}
        <input type="hidden" name="product" value={JSON.stringify(productData)} />

        <label>Enter Address</label>
        <textarea name="message" placeholder="Additional Message" required></textarea><br />

        <button type="submit">Place Order...</button>
      </form>
      <span>{result}</span>
    </div>
  );
};

export default FormSubmit;
