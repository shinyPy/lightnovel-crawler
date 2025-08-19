#!/usr/bin/env python3
from __future__ import annotations

import multiprocessing


def main():
    multiprocessing.freeze_support()

    try:
        from dotenv import load_dotenv
        load_dotenv()
    except Exception:
        pass

    from .core import start_app
    start_app()


if __name__ == "__main__":
    main()
