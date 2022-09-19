import MediatorModal from "../utils/MediatorModal";
import Router from "../utils/routing/Router";
import routers from "../utils/routing/routers";

const router=new Router()
const mediatorModal=new MediatorModal()
mediatorModal.init()
routers.map(rout=>{
  router.use(rout.path, rout.block, {type:rout.type, typeBlock: rout.typeBlock}).start()
})

export {router, mediatorModal}


