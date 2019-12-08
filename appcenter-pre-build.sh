#!/usr/bin/env bash
# Creates an .env from ENV variables for use with react-native-config
ENV_WHITELIST=${ENV_WHITELIST:-"^RN_"}
set | egrep -e $ENV_WHITELIST | sed 's/^RN_//g' > .env

echo $PWD
ls