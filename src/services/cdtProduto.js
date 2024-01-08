import api from "./api";

async function cdtProduto(name, size, description, category, subcategory, price, images) {
    console.log(name, size, description, category, subcategory, price, images)
    try{
        const resoponseCdtProduto = await api.post ('/cadastro',{ 
            name: name,
            size: size,
            description: description,
            category: category,
            subcategory: subcategory,
            price: price,
            images: images

        });
        console.log (resoponseCdtProduto) ;

        const responseGetAll = await api.get('/all');
        console.log(responseGetAll)
    } catch(error) {
        console.error(error);
    }

}

    export default cdtProduto;