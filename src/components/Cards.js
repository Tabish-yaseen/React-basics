function Cards(pors){
    const classes=pors.className
    return <div className={classes}>{pors.children}</div>

}
export default Cards