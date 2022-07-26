import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, __dirname, text, command }) => {
let date = moment.tz('Asia/Jakarta').format("dddd, Do MMMM, YYYY")
let time = moment.tz('Asia/Jakarta').format('HH:mm:ss')
conn.sendHydrated(m.chat, '*『 DanzBot-MD 』*', `halo kak👋\nsilahkan click tombol menu di bawah jika ingin melihat menu bot\njoin gc bot jika ingin melihat fitur² di group link : https://chat.whatsapp.com/GFJaGMLB9s66DhAZTxtFff bantu donasi agar bot berkembang dengan ketik .donasi thx for donate ^_^\n\nᴅᴀᴛᴇ: ${date}\nᴛɪᴍᴇ: ${time} ﹙ɢᴍᴛ +7:00)`.trim(), './media/broadcast.jpg', 'https://chat.whatsapp.com/GFJaGMLB9s66DhAZTxtFff', 'Group Official 👥', null, null, [
[`ᴍᴇɴᴜ`, '.m'],
[`\nɢᴡᴇʜ yatim🗿`, 'Bilek']
], m, {asLocation: true})
}
handler.help = ['.menu']
handler.tags = ['general']
handler.customPrefix = /^(menu|.menu)$/i
handler.command = new RegExp

export default handler
