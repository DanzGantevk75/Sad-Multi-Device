import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*Script Ini Di Private,Jika Ingin Tau Lebih Lanjut Chat Owner* wa.me/6288270863279`
conn.sendButtonDoc(m.chat, str, wm, 'Yahahah','Bilek', ftextt, m)
}
handler.command = handler.help = ['sc']
handler.tags = ['info']

export default handler
