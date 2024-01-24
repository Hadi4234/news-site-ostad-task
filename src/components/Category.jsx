
async function getData() {
  const res = await fetch(process.env.HOST_URL+'/api/category').then((res) => res.json()).catch((err) => console.log(err))
  return res['data']
  
}
export const Category = async () => {
  const data = await getData()
  return (
    <div>{
    data.map((item) => <div key={item.id}>{item.name}</div>)} </div>
  )
}
