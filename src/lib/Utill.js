export const createIntersectionObserver = (handler = () => {}, out, options) => {
    return new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    handler(entry)
                } else {
                    out(entry);
                }
            })
        },
        options
    )
}