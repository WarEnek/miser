<script lang="ts">
  let weight1: number | null = null;
  let price1: number | null = null;
  let weight2: number | null = null;
  let price2: number | null = null;

  let cheaper: number | null = null;

  const calculatePricePerGram = (weight: number | null, price: number | null): number | null => {
    if (weight && weight > 0 && price !== null && price >= 0) {
      return price / weight;
    }
    return null;
  };

  $: pricePerGram1 = calculatePricePerGram(weight1, price1);
  $: pricePerGram2 = calculatePricePerGram(weight2, price2);

  $: {
      if (pricePerGram1 !== null && pricePerGram2 !== null) {
        cheaper = pricePerGram1 < pricePerGram2 ? 1 : pricePerGram2 < pricePerGram1 ? 2 : null;
      } else {
        cheaper = null;
      }
    }
</script>

<main>
  <h1>Product Price Comparison</h1>

  <div class="product" class:cheaper={cheaper === 1}>
    <h2>Product 1</h2>
    <label>Weight (g):</label>
    <input type="number" bind:value={weight1} placeholder="0" />
    
    <label>Price:</label>
    <input type="number" bind:value={price1} placeholder="0" />
    
    {#if pricePerGram1 !== null}
      <p>Price per gram: {pricePerGram1.toFixed(2)}</p>
    {/if}
  </div>

  <div class="product" class:cheaper={cheaper === 2}>
    <h2>Product 2</h2>
    <label>Weight (g):</label>
    <input type="number" bind:value={weight2} placeholder="0" />
    
    <label>Price:</label>
    <input type="number" bind:value={price2} placeholder="0" />
    
    {#if pricePerGram2 !== null}
      <p>Price per gram: {pricePerGram2.toFixed(2)}</p>
    {/if}
  </div>

  {#if cheaper !== null}
    <div class="result">
      <p>Product {cheaper} is cheaper</p>
    </div>
  {/if}
</main>

<style>
  main {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    font-family: 'Inter', sans-serif;
  }

  h1 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 2rem;
    color: #f1f1f1; /* Light text for dark theme */
    text-align: center;
  }

  .product {
    background-color: #464646;
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.5s ease, background-color 0.5s ease;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #fff;
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    color: #fff;
  }

  input {
    text-align: center;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
    background-color: #fafafa;
    outline: none;
    transition: border-color 0.3s ease;
  }

  input:focus {
    border-color: #6200ee;
  }

  .result {
    background-color: #e7f9e7;
    padding: 1rem;
    border-radius: 8px;
    text-align: center;
    font-size: 1.2rem;
    color: #34a853;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 1rem;
  }

  /* Highlight cheaper product */
  .cheaper {
    border: 2px solid #34a853;
    animation: glow 1.5s infinite alternate;
  }

  /* Glow animation for the cheaper product */
  @keyframes glow {
    0% {
      box-shadow: 0 0 10px rgba(52, 168, 83, 0.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(52, 168, 83, 1);
    }
  }
</style>
