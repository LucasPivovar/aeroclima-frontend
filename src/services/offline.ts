import { openDB } from 'idb'

// Armazena registros autorizados. Não baixa mapas nem calcula rotas offline.
const database = () =>
  openDB('aeroclima-offline', 1, {
    upgrade(db) {
      db.createObjectStore('records')
    },
  })

export async function saveOfflineRecord(key: string, value: unknown): Promise<void> {
  const db = await database()
  try {
    await db.put('records', value, key)
  } finally {
    db.close()
  }
}

export async function readOfflineRecord(key: string): Promise<unknown> {
  const db = await database()
  try {
    return await db.get('records', key)
  } finally {
    db.close()
  }
}
