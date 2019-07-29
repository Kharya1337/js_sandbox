export default (store) => (next) => (payload) =>  {
    console.log(payload.type, payload);
    next(payload);
}