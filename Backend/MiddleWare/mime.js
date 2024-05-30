const multer=require('multer');

const  MIMETYPE={
  "image/png":"png",
  "image/jpeg":"jpg",
  "image/jpg":"jpg"
};
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    const isvalid=MIMETYPE[file.mimetype];
    let error=new Error("invalid");
    if(isvalid){
      error=null;
    }
    cb(error,"Backend/images");
  },
  filename:(req,file,cb)=>{
    const name=file.originalname.toLowerCase().split(" ").join('-');
    const ext=  MIMETYPE[file.mimetype];
    cb(null,name+"-"+ext);
  }
});

module.exports=multer({storage:storage}).single('image')
