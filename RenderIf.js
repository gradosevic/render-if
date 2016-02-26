const RenderIf = (condition, onTrue, onFalse)=>{
    onTrue  = onTrue  || (()=>{ return null });
    onFalse = onFalse || (()=>{ return null });
    return condition? onTrue():onFalse();
}
export default RenderIf;
