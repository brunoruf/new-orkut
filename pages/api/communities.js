import { SiteClient } from 'datocms-client';


export default async function handleResquest(req, res) {

    if(req.method === 'POST') {
        const TOKEN = 'f656dcbb960527fad0821426d482ac'
        const client = new SiteClient(TOKEN)

        const newRegister = await client.items.create({
            itemType: "43804",
            title: 'aaa',
            imageUrl: 'bbb',
            creatorSlug: 'ccc',
        })

        res.json({
            dados:'dawdawdwa',
            newRegister: newRegister,
        })

        return;
    }
    else {
        res.status(404).json({
            message: 'Não tem nada no GET, somente no POST'
        })
    }
}