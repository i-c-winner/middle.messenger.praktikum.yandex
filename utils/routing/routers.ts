import Modal from "../../components/modal/Modal";


const routers= [{
  path: '/pages/modal.html',
  block: Modal,
  type: 'loginIn'
},{
  path: '/pages/modal/registration.html',
  block: Modal,
  type: 'registration'
},
{
  path: 'pages/modal/settings.html',
  block: Modal,
  type: 'settings'
},
{
  path: '/main',
  block: null,
  type: 'main'
}
]

export default routers
