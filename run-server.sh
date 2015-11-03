#/bin/bash

usage () {
  echo $0 host port
}

if [ $# -ne 2 ]; then
  usage
  exit -1
fi

host=$1
port=$2

cd dist/package
python -m SimpleHTTPServer $port
