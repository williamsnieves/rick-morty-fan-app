const collectIdsAndDocs = (doc) => ({ id: doc.id, ...doc.data() });

export { collectIdsAndDocs };
