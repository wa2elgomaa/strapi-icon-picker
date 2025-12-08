import { useEffect, useRef } from 'react';

import { PLUGIN_ID } from '../pluginId';

type InitializerProps = {
  setPlugin: (id: string) => void;
};

/**
 * Initializes the icon picker plugin by registering it with the parent
 * application.
 *
 * @param {{ setPlugin: (id: string) => void }} props
 * @prop {function} setPlugin - A callback function that registers the plugin
 *     with the parent application.
 *
 * @returns {null}
 */
const Initializer = ({ setPlugin }: InitializerProps) => {
  const ref = useRef(setPlugin);

  useEffect(() => {
    ref.current(PLUGIN_ID);
  }, []);

  return null;
};

export { Initializer };
