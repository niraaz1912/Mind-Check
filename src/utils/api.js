
export async function postFeelingInfo(inputValue){
    const res = await fetch('/classify', {method:"post", body: JSON.stringify(inputValue)})
    if(!res.ok){
        throw {
            message: "Failed",
            statusText: res.statusText,
            staus: res.status
        }
    }
    const data = await res.json()
    return data;
}