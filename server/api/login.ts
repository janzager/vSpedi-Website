export default defineEventHandler((event) => {
    return event.node.res.req.body;
})