let handler = async(m, { conn, text, participants }) => {
  let teks = `   ⊙─〔 ıll TᗩGᗩᒪᒪ llı 〕─⊙
\n *${text ? text : 'Nothing'}*\n\n`
		      	for (let mem of participants) {
		            teks += ` ㇱ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n↻ 𝐌𝐢𝐤𝐚𝐬𝐚 𝐁𝐨𝐭 𝐖𝐡𝐚𝐭𝐬𝐚𝐚𝐩↻`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall|tagal|tall|t)$/i

handler.group = true
handler.admin = true
handler.botadmin = true
module.exports = handler
