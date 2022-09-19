import Modal from "../../components/modal/Modal";


const routers= [{
  path: '/pages/modal.html',
  block: Modal,
  type: 'loginIn',
  typeBlock: true
},{
  path: '/pages/modal/registration.html',
  block: Modal,
  type: 'registration',
  typeBlock: true
},
{
  path: 'pages/modal/settings.html',
  block: Modal,
  type: 'settings',
  typeBlock: true
},
{
  path: '/pages/main.html',
  block: null,
  type: 'main',
  typeBlock: false
}
]

export default routers
