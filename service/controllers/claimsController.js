import {
  createClaim,
  assignClaimToUser,
  getClaimsByUserId,
  getAllClaims,
} from "../services/claimsService.js";

export const createClaimController = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Claim adı zorunlu." });
  }

  try {
    const created = await createClaim(name);
    res.status(201).json({ message: "Claim oluşturuldu.", data: created });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const assignClaimController = async (req, res) => {
  const { userId, claimName } = req.body;

  if (!userId || !claimName) {
    return res.status(400).json({ message: "userId ve claimName zorunludur." });
  }

  try {
    const result = await assignClaimToUser(userId, claimName);
    res
      .status(200)
      .json({ message: "Claim kullanıcıya atandı.", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserClaimsController = async (req, res) => {
  const userId = parseInt(req.params.id);

  if (isNaN(userId)) {
    return res.status(400).json({ message: "Geçersiz kullanıcı ID" });
  }

  try {
    const claims = await getClaimsByUserId(userId);
    res.status(200).json({ data: claims });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
