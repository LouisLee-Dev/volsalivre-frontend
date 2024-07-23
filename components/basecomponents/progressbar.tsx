'use client';

import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
    state: number;
    page: number
}

const everyState = [1, 2, 3]

const ProgressBar: React.FC<ProgressBarProps> = ({ state, page }) => {
    return (
        <div className="flex flex-col gap-1">
            <h2 className="font-semibold">Passo {state} de {page}</h2>
            <div className="grid grid-cols-3 gap-1 h-1">
                {
                    everyState.map((value: any, index: number) => {
                        if (state > index) {
                            return (
                                <div key={index} className="bg-purple-500 rounded-full"></div>
                            )
                        }
                        else {
                            return (
                                <div key={index} className="bg-slate-200 rounded-full"></div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}

export default ProgressBar;