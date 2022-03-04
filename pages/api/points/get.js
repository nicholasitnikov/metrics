
import data from '../../../services/spb.json';

export default function handler(req, res) {
    res.status(200).json({ data: data })
}