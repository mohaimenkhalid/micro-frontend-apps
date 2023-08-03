const API_SERVER = "http://localhost:8080"

export const getProducts = async () => {
    const res = await fetch(`${API_SERVER}/products`)
    return res.json();
}

export const getProductById = async (id) => {
    const res = await fetch(`${API_SERVER}/products/${id}`)
    return res.json();
}

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "BDT",
})