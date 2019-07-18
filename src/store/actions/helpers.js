export const uploadFile = async (storageRef, file) => {
    const fileRef = storageRef.child(file.name);
    const snapshot = await fileRef.put(file);
    return await snapshot.ref.getDownloadURL();
};