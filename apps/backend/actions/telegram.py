import telegram
import os


async def initBot():
    try:
        token = os.getenv("TELEGRAM_API")
        if not token:
            raise ValueError("TELEGRAM_API env variable not found.")
        bot = telegram.Bot(token)
        async with bot:
            updates = (await bot.get_updates())[0]
            print(updates)
            await bot.send_message(text="Hi John!", chat_id=6870499665)
    except Exception as e:
        print(f"Failed to init the bot: {e}")
