export function sign_outmodel(req,res){
    res.clearCookie('token');
    res.json({
       'Status':'Success'
    });
}